import { Question } from '../question/question.model';
import { User } from '../auth/user.model';

export class Answer {
    constructor (
        public description: string,
        public question: Question,
        public createdAT?: Date,
        public user?: User
    ) {}

}
