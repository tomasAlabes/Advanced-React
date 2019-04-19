export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AggregateItem = {
  count: Scalars["Int"];
};

export type CartItem = Node & {
  id: Scalars["ID"];
  quantity: Scalars["Int"];
  item?: Maybe<Item>;
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CartItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CartItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CartItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CartItemWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  quantity?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  item?: Maybe<ItemWhereInput>;
  user?: Maybe<UserWhereInput>;
};

export type Item = Node & {
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  largeImage?: Maybe<Scalars["String"]>;
  price: Scalars["Int"];
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** A connection to a list of items. */
export type ItemConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ItemEdge>>;
  aggregate: AggregateItem;
};

/** An edge in a connection. */
export type ItemEdge = {
  /** The item at the end of the edge. */
  node: Item;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

export enum ItemOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ImageAsc = "image_ASC",
  ImageDesc = "image_DESC",
  LargeImageAsc = "largeImage_ASC",
  LargeImageDesc = "largeImage_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ItemWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars["String"]>;
  largeImage?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  largeImage_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  largeImage_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  largeImage_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  largeImage_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  largeImage_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  largeImage_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  largeImage_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  largeImage_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  largeImage_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  largeImage_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  largeImage_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  largeImage_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  largeImage_not_ends_with?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserWhereInput>;
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Mutation = {
  createItem: Item;
  updateItem: Item;
  deleteItem?: Maybe<Item>;
  signup: User;
  signin: User;
  signout?: Maybe<SuccessMessage>;
  requestReset?: Maybe<SuccessMessage>;
  resetPassword: User;
  updatePermissions?: Maybe<User>;
  addToCart?: Maybe<CartItem>;
  removeFromCart?: Maybe<CartItem>;
  createOrder: Order;
};

export type MutationCreateItemArgs = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
  largeImage?: Maybe<Scalars["String"]>;
};

export type MutationUpdateItemArgs = {
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteItemArgs = {
  id: Scalars["ID"];
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  name: Scalars["String"];
};

export type MutationSigninArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRequestResetArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  resetToken: Scalars["String"];
  password: Scalars["String"];
  confirmPassword: Scalars["String"];
};

export type MutationUpdatePermissionsArgs = {
  permissions?: Maybe<Array<Maybe<Permission>>>;
  userId: Scalars["ID"];
};

export type MutationAddToCartArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveFromCartArgs = {
  id: Scalars["ID"];
};

export type MutationCreateOrderArgs = {
  token: Scalars["String"];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
};

export type Order = Node & {
  id: Scalars["ID"];
  items?: Maybe<Array<OrderItem>>;
  total: Scalars["Int"];
  user: User;
  charge: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type OrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type OrderItem = Node & {
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  largeImage: Scalars["String"];
  price: Scalars["Int"];
  quantity: Scalars["Int"];
  user?: Maybe<User>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export enum OrderItemOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ImageAsc = "image_ASC",
  ImageDesc = "image_DESC",
  LargeImageAsc = "largeImage_ASC",
  LargeImageDesc = "largeImage_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type OrderItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars["String"]>;
  largeImage?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  largeImage_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  largeImage_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  largeImage_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  largeImage_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  largeImage_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  largeImage_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  largeImage_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  largeImage_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  largeImage_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  largeImage_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  largeImage_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  largeImage_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  largeImage_not_ends_with?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars["Int"]>;
  quantity?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserWhereInput>;
};

export enum OrderOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  ChargeAsc = "charge_ASC",
  ChargeDesc = "charge_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
};

export enum Permission {
  Admin = "ADMIN",
  User = "USER",
  Itemcreate = "ITEMCREATE",
  Itemupdate = "ITEMUPDATE",
  Itemdelete = "ITEMDELETE",
  Permissionupdate = "PERMISSIONUPDATE"
}

export type Query = {
  items: Array<Maybe<Item>>;
  item?: Maybe<Item>;
  itemsConnection: ItemConnection;
  me?: Maybe<User>;
  users: Array<Maybe<User>>;
  order?: Maybe<Order>;
  orders: Array<Maybe<Order>>;
};

export type QueryItemsArgs = {
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<ItemOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
};

export type QueryItemArgs = {
  where: ItemWhereUniqueInput;
};

export type QueryItemsConnectionArgs = {
  where?: Maybe<ItemWhereInput>;
};

export type QueryOrderArgs = {
  id: Scalars["ID"];
};

export type QueryOrdersArgs = {
  orderBy?: Maybe<OrderOrderByInput>;
};

export type SuccessMessage = {
  message?: Maybe<Scalars["String"]>;
};

export type User = {
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  permissions: Array<Permission>;
  cart: Array<CartItem>;
  orders?: Maybe<Array<Maybe<OrderItem>>>;
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars["String"]>;
  resetToken?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  resetToken_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  resetToken_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<Scalars["String"]>;
  resetTokenExpiry?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  cart_every?: Maybe<CartItemWhereInput>;
  cart_some?: Maybe<CartItemWhereInput>;
  cart_none?: Maybe<CartItemWhereInput>;
};
