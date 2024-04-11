export interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  children: ICategory[];
  circle_icon: string;
  disable_shipping: number;
}

export interface IChild {
  id: number;
  list: boolean;
  name: string;
  description: string;
  options: IOption[];
  other_value: unknown;
  parent: unknown;
  slug: string;
  type: unknown;
  value: string;
}

export interface IOption {
  child: boolean;
  id: number;
  name: string;
  parent: number;
  slug: string;
}

export interface IChildOption {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: number;
  list: boolean;
  type: null;
  value: string;
  other_value: string;
  options: IOption[];
}
