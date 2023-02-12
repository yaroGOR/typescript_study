
type ID = string
interface IUser2 {
    id:ID;
    name2:string;
    age2:string;
}
type MaybePopularTag = PopularTag | null
const dragonsTag : MaybePopularTag = "dragon"
type PopularTag = string
const popularTags:PopularTag[] = ['dragon', 'coffe']

let username:string = 'alex'

let pageName: string | number = '1'  // | union operator

let errorMessage: string | null = null


interface IUser {
    name: string
    surname: string
}

let user_one: IUser | null = null
