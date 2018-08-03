package net.cordaclub.marge

import net.corda.core.identity.CordaX500Name
import net.corda.core.utilities.getOrThrow
import net.corda.testing.driver.DriverParameters
import net.corda.testing.driver.driver
import net.corda.testing.node.User

/**
 * This file is exclusively for being able to run your nodes through an IDE (as opposed to using deployNodes)
 * Do not use in a production environment.
 *
 * To debug your CorDapp:
 *
 * 1. Run the "Run Template CorDapp" run configuration.
 * 2. Wait for all the nodes to start.
 * 3. Note the debug ports for each node, which should be output to the console. The "Debug CorDapp" configuration runs
 *    with port 5007, which should be "PartyA". In any case, double-check the console output to be sure.
 * 4. Set your breakpoints in your CorDapp code.
 * 5. Run the "Debug CorDapp" remote debug run configuration.
 */
fun main(args: Array<String>) {
    // No permissions required as we are not invoking flows.
    val user = User("user1", "test", permissions = setOf("ALL"))
    driver(DriverParameters(isDebug = true, waitForAllNodesToFinish = true, startNodesInProcess = true, extraCordappPackagesToScan = listOf("io.cordite"))) {
        listOf(
//            startNode(providedName = CordaX500Name("Fixalot Hospital", "London", "GB"), rpcUsers = listOf(user)),
            startNode(providedName = CordaX500Name("General Insurer", "New Delhi", "IN"), rpcUsers = listOf(user))
//            startNode(providedName = CordaX500Name("Frugal Insurer", "Tokyo", "JP"), rpcUsers = listOf(user)),
//            startNode(providedName = CordaX500Name("Kaching! Bank", "Paris", "FR"), rpcUsers = listOf(user))
        ).map { it.getOrThrow() }
    }
}