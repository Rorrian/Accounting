import { instance } from '@shared/api/axios'

import { Category } from '../model/types'

class CategoryService {
  private _BASE_URL = '/categories'

  async createCategories(newCategory: Omit<Category, 'id'>) {
    return instance.post<Category>(`${this._BASE_URL}`, newCategory)
  }

  // async fetchCategories() {
  //   return instance.get<Category[]>(`${this._BASE_URL}`)
  // }

  // async fetchCategory(categoryId: number) {
  //   return instance.get<Category>(`${this._BASE_URL}/${categoryId}`)
  // }

  async editCategory(categoryId: number, newCategoryData: { name: string }) {
    return instance.put<Category>(
      `${this._BASE_URL}/${categoryId}`,
      newCategoryData,
    )
  }

  async deleteCategory(categoryId: number) {
    return instance.delete<string>(`${this._BASE_URL}/${categoryId}`)
  }
}

export default new CategoryService()
