function func() {
    var funcObj = arguments.callee
    funcObj.test++
    alert(funcObj.test)
}
func.test = 1
func()
func()
