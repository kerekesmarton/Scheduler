// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  authUser: (where?: AuthUserWhereInput) => Promise<boolean>;
  investment: (where?: InvestmentWhereInput) => Promise<boolean>;
  investor: (where?: InvestorWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  authUser: (where: AuthUserWhereUniqueInput) => AuthUserNullablePromise;
  authUsers: (args?: {
    where?: AuthUserWhereInput;
    orderBy?: AuthUserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<AuthUser>;
  authUsersConnection: (args?: {
    where?: AuthUserWhereInput;
    orderBy?: AuthUserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AuthUserConnectionPromise;
  investment: (where: InvestmentWhereUniqueInput) => InvestmentNullablePromise;
  investments: (args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Investment>;
  investmentsConnection: (args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => InvestmentConnectionPromise;
  investor: (where: InvestorWhereUniqueInput) => InvestorNullablePromise;
  investors: (args?: {
    where?: InvestorWhereInput;
    orderBy?: InvestorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Investor>;
  investorsConnection: (args?: {
    where?: InvestorWhereInput;
    orderBy?: InvestorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => InvestorConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthUser: (data: AuthUserCreateInput) => AuthUserPromise;
  updateAuthUser: (args: {
    data: AuthUserUpdateInput;
    where: AuthUserWhereUniqueInput;
  }) => AuthUserPromise;
  updateManyAuthUsers: (args: {
    data: AuthUserUpdateManyMutationInput;
    where?: AuthUserWhereInput;
  }) => BatchPayloadPromise;
  upsertAuthUser: (args: {
    where: AuthUserWhereUniqueInput;
    create: AuthUserCreateInput;
    update: AuthUserUpdateInput;
  }) => AuthUserPromise;
  deleteAuthUser: (where: AuthUserWhereUniqueInput) => AuthUserPromise;
  deleteManyAuthUsers: (where?: AuthUserWhereInput) => BatchPayloadPromise;
  createInvestment: (data: InvestmentCreateInput) => InvestmentPromise;
  updateInvestment: (args: {
    data: InvestmentUpdateInput;
    where: InvestmentWhereUniqueInput;
  }) => InvestmentPromise;
  updateManyInvestments: (args: {
    data: InvestmentUpdateManyMutationInput;
    where?: InvestmentWhereInput;
  }) => BatchPayloadPromise;
  upsertInvestment: (args: {
    where: InvestmentWhereUniqueInput;
    create: InvestmentCreateInput;
    update: InvestmentUpdateInput;
  }) => InvestmentPromise;
  deleteInvestment: (where: InvestmentWhereUniqueInput) => InvestmentPromise;
  deleteManyInvestments: (where?: InvestmentWhereInput) => BatchPayloadPromise;
  createInvestor: (data: InvestorCreateInput) => InvestorPromise;
  updateInvestor: (args: {
    data: InvestorUpdateInput;
    where: InvestorWhereUniqueInput;
  }) => InvestorPromise;
  updateManyInvestors: (args: {
    data: InvestorUpdateManyMutationInput;
    where?: InvestorWhereInput;
  }) => BatchPayloadPromise;
  upsertInvestor: (args: {
    where: InvestorWhereUniqueInput;
    create: InvestorCreateInput;
    update: InvestorUpdateInput;
  }) => InvestorPromise;
  deleteInvestor: (where: InvestorWhereUniqueInput) => InvestorPromise;
  deleteManyInvestors: (where?: InvestorWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  authUser: (
    where?: AuthUserSubscriptionWhereInput
  ) => AuthUserSubscriptionPayloadSubscription;
  investment: (
    where?: InvestmentSubscriptionWhereInput
  ) => InvestmentSubscriptionPayloadSubscription;
  investor: (
    where?: InvestorSubscriptionWhereInput
  ) => InvestorSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AuthUserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "token_ASC"
  | "token_DESC"
  | "isActive_ASC"
  | "isActive_DESC";

export type InvestmentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "header_ASC"
  | "header_DESC"
  | "body_ASC"
  | "body_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type InvestorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "fistName_ASC"
  | "fistName_DESC"
  | "lastName_ASC"
  | "lastName_DESC";

export interface InvestmentUpdateManyInput {
  create?: Maybe<InvestmentCreateInput[] | InvestmentCreateInput>;
  update?: Maybe<
    | InvestmentUpdateWithWhereUniqueNestedInput[]
    | InvestmentUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | InvestmentUpsertWithWhereUniqueNestedInput[]
    | InvestmentUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput>;
  connect?: Maybe<InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput>;
  set?: Maybe<InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput>;
  disconnect?: Maybe<InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput>;
  deleteMany?: Maybe<InvestmentScalarWhereInput[] | InvestmentScalarWhereInput>;
  updateMany?: Maybe<
    | InvestmentUpdateManyWithWhereNestedInput[]
    | InvestmentUpdateManyWithWhereNestedInput
  >;
}

export interface InvestorCreateInput {
  id?: Maybe<ID_Input>;
  auth: AuthUserCreateOneInput;
  fistName: String;
  lastName: String;
  investments?: Maybe<InvestmentCreateManyInput>;
}

export interface InvestorWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  auth?: Maybe<AuthUserWhereInput>;
  fistName?: Maybe<String>;
  fistName_not?: Maybe<String>;
  fistName_in?: Maybe<String[] | String>;
  fistName_not_in?: Maybe<String[] | String>;
  fistName_lt?: Maybe<String>;
  fistName_lte?: Maybe<String>;
  fistName_gt?: Maybe<String>;
  fistName_gte?: Maybe<String>;
  fistName_contains?: Maybe<String>;
  fistName_not_contains?: Maybe<String>;
  fistName_starts_with?: Maybe<String>;
  fistName_not_starts_with?: Maybe<String>;
  fistName_ends_with?: Maybe<String>;
  fistName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  investments_every?: Maybe<InvestmentWhereInput>;
  investments_some?: Maybe<InvestmentWhereInput>;
  investments_none?: Maybe<InvestmentWhereInput>;
  AND?: Maybe<InvestorWhereInput[] | InvestorWhereInput>;
  OR?: Maybe<InvestorWhereInput[] | InvestorWhereInput>;
  NOT?: Maybe<InvestorWhereInput[] | InvestorWhereInput>;
}

export type AuthUserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface InvestmentSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<InvestmentWhereInput>;
  AND?: Maybe<
    InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput
  >;
  OR?: Maybe<
    InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput
  >;
  NOT?: Maybe<
    InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput
  >;
}

export interface AuthUserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AuthUserWhereInput>;
  AND?: Maybe<
    AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput
  >;
  OR?: Maybe<AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput>;
  NOT?: Maybe<
    AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput
  >;
}

export interface AuthUserUpdateDataInput {
  token?: Maybe<String>;
  isActive?: Maybe<Boolean>;
}

export interface InvestmentUpdateManyDataInput {
  header?: Maybe<String>;
  body?: Maybe<String>;
}

export interface AuthUserUpdateOneRequiredInput {
  create?: Maybe<AuthUserCreateInput>;
  update?: Maybe<AuthUserUpdateDataInput>;
  upsert?: Maybe<AuthUserUpsertNestedInput>;
  connect?: Maybe<AuthUserWhereUniqueInput>;
}

export interface InvestmentScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  header?: Maybe<String>;
  header_not?: Maybe<String>;
  header_in?: Maybe<String[] | String>;
  header_not_in?: Maybe<String[] | String>;
  header_lt?: Maybe<String>;
  header_lte?: Maybe<String>;
  header_gt?: Maybe<String>;
  header_gte?: Maybe<String>;
  header_contains?: Maybe<String>;
  header_not_contains?: Maybe<String>;
  header_starts_with?: Maybe<String>;
  header_not_starts_with?: Maybe<String>;
  header_ends_with?: Maybe<String>;
  header_not_ends_with?: Maybe<String>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  AND?: Maybe<InvestmentScalarWhereInput[] | InvestmentScalarWhereInput>;
  OR?: Maybe<InvestmentScalarWhereInput[] | InvestmentScalarWhereInput>;
  NOT?: Maybe<InvestmentScalarWhereInput[] | InvestmentScalarWhereInput>;
}

export interface InvestorUpdateInput {
  auth?: Maybe<AuthUserUpdateOneRequiredInput>;
  fistName?: Maybe<String>;
  lastName?: Maybe<String>;
  investments?: Maybe<InvestmentUpdateManyInput>;
}

export interface InvestmentUpsertWithWhereUniqueNestedInput {
  where: InvestmentWhereUniqueInput;
  update: InvestmentUpdateDataInput;
  create: InvestmentCreateInput;
}

export interface AuthUserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  token?: Maybe<String>;
  token_not?: Maybe<String>;
  token_in?: Maybe<String[] | String>;
  token_not_in?: Maybe<String[] | String>;
  token_lt?: Maybe<String>;
  token_lte?: Maybe<String>;
  token_gt?: Maybe<String>;
  token_gte?: Maybe<String>;
  token_contains?: Maybe<String>;
  token_not_contains?: Maybe<String>;
  token_starts_with?: Maybe<String>;
  token_not_starts_with?: Maybe<String>;
  token_ends_with?: Maybe<String>;
  token_not_ends_with?: Maybe<String>;
  isActive?: Maybe<Boolean>;
  isActive_not?: Maybe<Boolean>;
  AND?: Maybe<AuthUserWhereInput[] | AuthUserWhereInput>;
  OR?: Maybe<AuthUserWhereInput[] | AuthUserWhereInput>;
  NOT?: Maybe<AuthUserWhereInput[] | AuthUserWhereInput>;
}

export interface InvestmentUpdateWithWhereUniqueNestedInput {
  where: InvestmentWhereUniqueInput;
  data: InvestmentUpdateDataInput;
}

export interface AuthUserCreateInput {
  id?: Maybe<ID_Input>;
  token: String;
  isActive: Boolean;
}

export type InvestorWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AuthUserUpdateInput {
  token?: Maybe<String>;
  isActive?: Maybe<Boolean>;
}

export interface InvestorUpdateManyMutationInput {
  fistName?: Maybe<String>;
  lastName?: Maybe<String>;
}

export interface AuthUserUpdateManyMutationInput {
  token?: Maybe<String>;
  isActive?: Maybe<Boolean>;
}

export type InvestmentWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface InvestmentCreateManyInput {
  create?: Maybe<InvestmentCreateInput[] | InvestmentCreateInput>;
  connect?: Maybe<InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput>;
}

export interface InvestmentUpdateDataInput {
  header?: Maybe<String>;
  body?: Maybe<String>;
}

export interface InvestmentUpdateManyMutationInput {
  header?: Maybe<String>;
  body?: Maybe<String>;
}

export interface InvestmentUpdateInput {
  header?: Maybe<String>;
  body?: Maybe<String>;
}

export interface InvestmentCreateInput {
  id?: Maybe<ID_Input>;
  header: String;
  body: String;
}

export interface AuthUserCreateOneInput {
  create?: Maybe<AuthUserCreateInput>;
  connect?: Maybe<AuthUserWhereUniqueInput>;
}

export interface InvestorSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<InvestorWhereInput>;
  AND?: Maybe<
    InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput
  >;
  OR?: Maybe<InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput>;
  NOT?: Maybe<
    InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput
  >;
}

export interface InvestmentWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  header?: Maybe<String>;
  header_not?: Maybe<String>;
  header_in?: Maybe<String[] | String>;
  header_not_in?: Maybe<String[] | String>;
  header_lt?: Maybe<String>;
  header_lte?: Maybe<String>;
  header_gt?: Maybe<String>;
  header_gte?: Maybe<String>;
  header_contains?: Maybe<String>;
  header_not_contains?: Maybe<String>;
  header_starts_with?: Maybe<String>;
  header_not_starts_with?: Maybe<String>;
  header_ends_with?: Maybe<String>;
  header_not_ends_with?: Maybe<String>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  AND?: Maybe<InvestmentWhereInput[] | InvestmentWhereInput>;
  OR?: Maybe<InvestmentWhereInput[] | InvestmentWhereInput>;
  NOT?: Maybe<InvestmentWhereInput[] | InvestmentWhereInput>;
}

export interface InvestmentUpdateManyWithWhereNestedInput {
  where: InvestmentScalarWhereInput;
  data: InvestmentUpdateManyDataInput;
}

export interface AuthUserUpsertNestedInput {
  update: AuthUserUpdateDataInput;
  create: AuthUserCreateInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface InvestorPreviousValues {
  id: ID_Output;
  fistName: String;
  lastName: String;
}

export interface InvestorPreviousValuesPromise
  extends Promise<InvestorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  fistName: () => Promise<String>;
  lastName: () => Promise<String>;
}

export interface InvestorPreviousValuesSubscription
  extends Promise<AsyncIterator<InvestorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  fistName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
}

export interface AuthUserConnection {
  pageInfo: PageInfo;
  edges: AuthUserEdge[];
}

export interface AuthUserConnectionPromise
  extends Promise<AuthUserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AuthUserEdge>>() => T;
  aggregate: <T = AggregateAuthUserPromise>() => T;
}

export interface AuthUserConnectionSubscription
  extends Promise<AsyncIterator<AuthUserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthUserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthUserSubscription>() => T;
}

export interface AggregateInvestor {
  count: Int;
}

export interface AggregateInvestorPromise
  extends Promise<AggregateInvestor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvestorSubscription
  extends Promise<AsyncIterator<AggregateInvestor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface InvestorSubscriptionPayload {
  mutation: MutationType;
  node: Investor;
  updatedFields: String[];
  previousValues: InvestorPreviousValues;
}

export interface InvestorSubscriptionPayloadPromise
  extends Promise<InvestorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = InvestorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvestorPreviousValuesPromise>() => T;
}

export interface InvestorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvestorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvestorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvestorPreviousValuesSubscription>() => T;
}

export interface InvestmentSubscriptionPayload {
  mutation: MutationType;
  node: Investment;
  updatedFields: String[];
  previousValues: InvestmentPreviousValues;
}

export interface InvestmentSubscriptionPayloadPromise
  extends Promise<InvestmentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = InvestmentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvestmentPreviousValuesPromise>() => T;
}

export interface InvestmentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvestmentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvestmentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvestmentPreviousValuesSubscription>() => T;
}

export interface InvestorEdge {
  node: Investor;
  cursor: String;
}

export interface InvestorEdgePromise
  extends Promise<InvestorEdge>,
    Fragmentable {
  node: <T = InvestorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface InvestorEdgeSubscription
  extends Promise<AsyncIterator<InvestorEdge>>,
    Fragmentable {
  node: <T = InvestorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface InvestorConnection {
  pageInfo: PageInfo;
  edges: InvestorEdge[];
}

export interface InvestorConnectionPromise
  extends Promise<InvestorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<InvestorEdge>>() => T;
  aggregate: <T = AggregateInvestorPromise>() => T;
}

export interface InvestorConnectionSubscription
  extends Promise<AsyncIterator<InvestorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvestorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvestorSubscription>() => T;
}

export interface Investor {
  id: ID_Output;
  fistName: String;
  lastName: String;
}

export interface InvestorPromise extends Promise<Investor>, Fragmentable {
  id: () => Promise<ID_Output>;
  auth: <T = AuthUserPromise>() => T;
  fistName: () => Promise<String>;
  lastName: () => Promise<String>;
  investments: <T = FragmentableArray<Investment>>(args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface InvestorSubscription
  extends Promise<AsyncIterator<Investor>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  auth: <T = AuthUserSubscription>() => T;
  fistName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  investments: <T = Promise<AsyncIterator<InvestmentSubscription>>>(args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface InvestorNullablePromise
  extends Promise<Investor | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  auth: <T = AuthUserPromise>() => T;
  fistName: () => Promise<String>;
  lastName: () => Promise<String>;
  investments: <T = FragmentableArray<Investment>>(args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface InvestmentEdge {
  node: Investment;
  cursor: String;
}

export interface InvestmentEdgePromise
  extends Promise<InvestmentEdge>,
    Fragmentable {
  node: <T = InvestmentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface InvestmentEdgeSubscription
  extends Promise<AsyncIterator<InvestmentEdge>>,
    Fragmentable {
  node: <T = InvestmentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Investment {
  id: ID_Output;
  header: String;
  body: String;
}

export interface InvestmentPromise extends Promise<Investment>, Fragmentable {
  id: () => Promise<ID_Output>;
  header: () => Promise<String>;
  body: () => Promise<String>;
}

export interface InvestmentSubscription
  extends Promise<AsyncIterator<Investment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  header: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface InvestmentNullablePromise
  extends Promise<Investment | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  header: () => Promise<String>;
  body: () => Promise<String>;
}

export interface InvestmentPreviousValues {
  id: ID_Output;
  header: String;
  body: String;
}

export interface InvestmentPreviousValuesPromise
  extends Promise<InvestmentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  header: () => Promise<String>;
  body: () => Promise<String>;
}

export interface InvestmentPreviousValuesSubscription
  extends Promise<AsyncIterator<InvestmentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  header: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface AuthUserPreviousValues {
  id: ID_Output;
  token: String;
  isActive: Boolean;
}

export interface AuthUserPreviousValuesPromise
  extends Promise<AuthUserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  isActive: () => Promise<Boolean>;
}

export interface AuthUserPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthUserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
  isActive: () => Promise<AsyncIterator<Boolean>>;
}

export interface AuthUserSubscriptionPayload {
  mutation: MutationType;
  node: AuthUser;
  updatedFields: String[];
  previousValues: AuthUserPreviousValues;
}

export interface AuthUserSubscriptionPayloadPromise
  extends Promise<AuthUserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthUserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthUserPreviousValuesPromise>() => T;
}

export interface AuthUserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthUserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthUserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthUserPreviousValuesSubscription>() => T;
}

export interface AuthUser {
  id: ID_Output;
  token: String;
  isActive: Boolean;
}

export interface AuthUserPromise extends Promise<AuthUser>, Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  isActive: () => Promise<Boolean>;
}

export interface AuthUserSubscription
  extends Promise<AsyncIterator<AuthUser>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
  isActive: () => Promise<AsyncIterator<Boolean>>;
}

export interface AuthUserNullablePromise
  extends Promise<AuthUser | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  isActive: () => Promise<Boolean>;
}

export interface AggregateAuthUser {
  count: Int;
}

export interface AggregateAuthUserPromise
  extends Promise<AggregateAuthUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthUserSubscription
  extends Promise<AsyncIterator<AggregateAuthUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface InvestmentConnection {
  pageInfo: PageInfo;
  edges: InvestmentEdge[];
}

export interface InvestmentConnectionPromise
  extends Promise<InvestmentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<InvestmentEdge>>() => T;
  aggregate: <T = AggregateInvestmentPromise>() => T;
}

export interface InvestmentConnectionSubscription
  extends Promise<AsyncIterator<InvestmentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvestmentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvestmentSubscription>() => T;
}

export interface AggregateInvestment {
  count: Int;
}

export interface AggregateInvestmentPromise
  extends Promise<AggregateInvestment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvestmentSubscription
  extends Promise<AsyncIterator<AggregateInvestment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AuthUserEdge {
  node: AuthUser;
  cursor: String;
}

export interface AuthUserEdgePromise
  extends Promise<AuthUserEdge>,
    Fragmentable {
  node: <T = AuthUserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthUserEdgeSubscription
  extends Promise<AsyncIterator<AuthUserEdge>>,
    Fragmentable {
  node: <T = AuthUserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Investor",
    embedded: false
  },
  {
    name: "AuthUser",
    embedded: false
  },
  {
    name: "Investment",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
