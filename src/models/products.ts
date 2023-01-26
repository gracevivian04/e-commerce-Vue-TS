export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  images: string[],
  creationAt: Date,
  updateAt: Date,
}

export interface Category {
  id: number,
  name: string,
  image: string,
  creationAt: Date,
  updateAt: Date,
}