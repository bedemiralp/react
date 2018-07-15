function isPrimitive(val) {
    return 
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    typeof val === 'string' ||
    typeof val === 'symbol' ||
    typeof val === 'undefined' ||
    val === null
}

export default isPrimitive;