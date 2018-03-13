const question = {
    _id: 1,
    title: '¿como reutilizo un component Android?',
    description: 'miren que tal eso...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
        firstName: 'Jordi',
        lastName: 'Lifsyc',
        email: 'jordi@gmail.com',
        password: '1234'
    }
}

export const questions = new Array(10).fill(question)

export const questionsMiddleware = (req, res, next) => {
    req.questions = questions
    next()
}

export const questionMiddleware = (req, res, next) => {
    const { id } = req.params  
    req.question = questions.find(({ _id }) => _id === +id)
    next()
}