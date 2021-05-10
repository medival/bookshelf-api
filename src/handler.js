const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
	const {
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading, } = request.payload;
	
	const id = nanoid(16);
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;
	let finished = false;
	
	if (pageCount === readPage) {
		finished = true;
	}
	
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
	};
	
	if (!name) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. Mohon isi nama buku'
		});
		response.code(400);
		return response;
	}
	
	if (readPage > pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
		})
		response.code(400);
		return response;
	}

	books.push(newBook);
	const isSuccess = books.filter((book) => book.id === id).length > 0;
	if (isSuccess) {
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil ditambahkan',
			data: {
				bookId: id
			},
		});
		response.code(201);
		return response;
	}
	
	const response = h.response({
	status: 'error',
	message: 'Buku gagal ditambahkan'
	});
	response.code(500);
	return response;
};

const getAllBooksHandler = (request, h) => {
	
	const { name, reading, finished } = request.query;
	
	if (name) {
		const response = h.response({
		status: 'success',
		data: {
			books: books.map((book) => ({
				id: book.id,
				name: book.name,
				publisher: book.publisher
			}))
		}
	});
	response.code(200);
	return response;
	}
	
	if (reading === '1') {
		const response = h.response({
			status: 'success',
			data: {
				books: books
					.filter((book) => book.reading === true)
					.map((book) => ({
						id: book.id,
						name: book.name,
						publisher: book.publisher,
					})),
			},
		});
		response.code(200);
		return response;
	}
	
	if (finished === '1') {
		const response = h.response({
			status: 'success',
			data: {
				books: books
					.filter((book) => book.reading === true)
					.map((book) => ({
						id: book.id,
						name: book.name,
						publisher: book.publisher,
					})),
			},
		})
		response.code(200);
		return response;
	}
	
	const response = h.response({
	status: 'success',
		data: {
			books: books.map((book) => ({
				id: book.id,
				name: book.name,
				publisher: book.publisher
			}))
		}
	});
	response.code(200);
	return response;
}

module.exports = {
	addBookHandler,
	getAllBooksHandler
}