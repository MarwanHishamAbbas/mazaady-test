const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export default class FetchService {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_BASE_URL!
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`)
    }

    const parseResponse = await response.json()
    return parseResponse.data
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`Failed to post data to ${endpoint}`)
    }
    return response.json()
  }
}
