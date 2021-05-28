// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
    drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop(name)
    drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(name)
    drivers
}

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}