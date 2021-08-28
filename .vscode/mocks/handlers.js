import { rest } from 'msw'

export const handlers = [
  rest.get('https://my.backend/book', (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
  }),
  rest.post('https://SignUpUser', (req, res, ctx) => {
    const {userName,email } = req
    return res(
      ctx.status(200)
    )
  })
]
