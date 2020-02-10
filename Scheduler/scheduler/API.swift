//  This file was automatically generated and should not be edited.

import Apollo
import Foundation

public final class InvesttorsQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition =
    """
    query investtors {
      investors {
        __typename
        id
        fistName
        lastName
        investments {
          __typename
          id
          body
          header
        }
      }
    }
    """

  public let operationName = "investtors"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Query"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("investors", type: .nonNull(.list(.object(Investor.selections)))),
    ]

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(investors: [Investor?]) {
      self.init(unsafeResultMap: ["__typename": "Query", "investors": investors.map { (value: Investor?) -> ResultMap? in value.flatMap { (value: Investor) -> ResultMap in value.resultMap } }])
    }

    public var investors: [Investor?] {
      get {
        return (resultMap["investors"] as! [ResultMap?]).map { (value: ResultMap?) -> Investor? in value.flatMap { (value: ResultMap) -> Investor in Investor(unsafeResultMap: value) } }
      }
      set {
        resultMap.updateValue(newValue.map { (value: Investor?) -> ResultMap? in value.flatMap { (value: Investor) -> ResultMap in value.resultMap } }, forKey: "investors")
      }
    }

    public struct Investor: GraphQLSelectionSet {
      public static let possibleTypes = ["Investor"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("fistName", type: .nonNull(.scalar(String.self))),
        GraphQLField("lastName", type: .nonNull(.scalar(String.self))),
        GraphQLField("investments", type: .list(.nonNull(.object(Investment.selections)))),
      ]

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: GraphQLID, fistName: String, lastName: String, investments: [Investment]? = nil) {
        self.init(unsafeResultMap: ["__typename": "Investor", "id": id, "fistName": fistName, "lastName": lastName, "investments": investments.flatMap { (value: [Investment]) -> [ResultMap] in value.map { (value: Investment) -> ResultMap in value.resultMap } }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return resultMap["id"]! as! GraphQLID
        }
        set {
          resultMap.updateValue(newValue, forKey: "id")
        }
      }

      public var fistName: String {
        get {
          return resultMap["fistName"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "fistName")
        }
      }

      public var lastName: String {
        get {
          return resultMap["lastName"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "lastName")
        }
      }

      public var investments: [Investment]? {
        get {
          return (resultMap["investments"] as? [ResultMap]).flatMap { (value: [ResultMap]) -> [Investment] in value.map { (value: ResultMap) -> Investment in Investment(unsafeResultMap: value) } }
        }
        set {
          resultMap.updateValue(newValue.flatMap { (value: [Investment]) -> [ResultMap] in value.map { (value: Investment) -> ResultMap in value.resultMap } }, forKey: "investments")
        }
      }

      public struct Investment: GraphQLSelectionSet {
        public static let possibleTypes = ["Investment"]

        public static let selections: [GraphQLSelection] = [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("body", type: .nonNull(.scalar(String.self))),
          GraphQLField("header", type: .nonNull(.scalar(String.self))),
        ]

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(id: GraphQLID, body: String, header: String) {
          self.init(unsafeResultMap: ["__typename": "Investment", "id": id, "body": body, "header": header])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var id: GraphQLID {
          get {
            return resultMap["id"]! as! GraphQLID
          }
          set {
            resultMap.updateValue(newValue, forKey: "id")
          }
        }

        public var body: String {
          get {
            return resultMap["body"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "body")
          }
        }

        public var header: String {
          get {
            return resultMap["header"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "header")
          }
        }
      }
    }
  }
}
