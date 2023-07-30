//
//  ios_testApp.swift
//  ios_test
//
//  Created by Raite31 on 2023/7/30.
//

import SwiftUI

@main
struct ios_testApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
