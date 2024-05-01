import Foundation

@objc public class GooglePlayServicesCheck: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
