/**
 * @file
 * @author 邵康
 * @date 2020/3/14
*/
let condition = true;
if (condition) {
}

(function () {

})();

let obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(obj.a);

function funcName() {
}
funcName();

let func = function func() {

};
func();

// if (user.isAuthenticated()
//     && user.isInRole('admin')
//     && user.hasAuthority('add-admin')
//     || user.hasAuthority('delete-admin')
// ) {
//
// }

let html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
    + '<article>'
    +     '<h1>Title here</h1>'
    +     '<p>This is a paragraph</p>'
    +     '<footer>Complete</footer>'
    + '</article>';
console.log(html);

let html2 = [
    '<article>',
        '<h1>Title here</h1>',
        '<p>This is a paragraph</p>',
        '<footer>Complete</footer>',
    '</article>'
];
html2 = html2.join('');
console.log(html2);

setTimeout(
    function () {
        console.log('hello');
    },
    200
);

let array = [
    {
        a: 1
    },
    {
        b: 2
    }
];
console.log(array);

if (condition) {

} else {

}

try {
    // some statements;
} catch (ex) {
    // some statements;
}


let TargetState = {
    READING: 1,
    READED: 2,
    APPLIED: 3,
    READY: 4
};
console.log(TargetState);

/**
 * TextNode方法
 *
 * @param {Object} options options对象
 * @param {string} options.value options的value属性
 * @param {string} engine options的engine属性
 * @class
 */
function TextNode(options) {

}

/**
 * TextNode 克隆方法
 *
 * @return {TextNode} 返回值
 */
TextNode.prototype.clone = function () {
    return this;
};

let textNode = new TextNode({value: '1', engine: ''});
textNode.clone();

/**
 * 描述
 *
 * @class
 */
function Developer() {
    // constructor body
}

/**
 * 类描述
 *
 * @class
 * @extends Developer
 */
let Fronteer = function () {
    Developer.call(this);

    /**
     * 属性描述
     *
     * @type {string}
     * @private
     */
    this._level = 'T12';
};

/**
 * 实现继承
 *
 * @param {Function} subClass subClass描述
 * @param {Function} superClass superClass描述
 */
function inherits(subClass, superClass) {

    /**
     * 描述
     *
     * @class
     */
    let F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}

inherits(Fronteer, Developer);

/**
 * 获取 level
 *
 * @return {string} 返回值描述
 * @private
 */
Fronteer.prototype._getLevel = function () {
    return this._level;
};

/**
 * 函数描述
 *
 * @param {string} param 参数p1
 * @param {string} argument 参数p2
 * @param {number=} number p3(可变）
 * @return {Object} 返回值
 */
function foo(param, argument, number) {
    let temp = number || 10;
    return {
        param: param,
        argument: argument,
        number: temp
    };
}
foo('1', '2', 2);

/**
 * Select描述
 *
 * @constructor
 */
let Select = function () {

};

/**
 * 点击处理
 *
 * @fire Select#change
 * @private
 */
Select.prototype.clickHandler = function () {
    /**
     * 值变化触发事件
     *
     * @event Select#change
     * @param {Object} e e事件
     * @param {string} e.before before属性
     * @param {string} e.after after属性
     */
    this.fire(
        'change',
        {
            before: 'foo',
            after: 'bar'
        }
    );
};

/**
 * 常量说明
 *
 * @const
 * @type {string}
 */
const REQUEST_URL = 'myurl.do';
console.log(REQUEST_URL);

/**
 * 服务器
 *
 * @typedef {Object} namespaceA~Server
 * @property {string} host 主机
 * @property {number} port 端口
 */

/**
 *
 * @type {Array.<namespaceA~Server~>}
 */
let servers = [
    {
        host: '1.2.3.4',
        port: 8080
    },
    {
        host: '1.2.3.5',
        port: 8081
    }
];
console.log(servers);

define(
    function (require) {
        /**
         * foo description
         *
         * @exports Foo
         */
        let foo = {
            // TODO
        };

        /**
         * baz description
         *
         * @return {boolean} return
         */
        foo.baz = function () {
            // TODO
            return true;
        };

        return foo;
    }
);

/**
 * A module representing a jacket.
 *
 * @module jacket
 */
define(
    function () {

        /**
         * 描述
         *
         * @class
         * @alias module:jacket
         */
        let Jacket = function () {
        };

        return Jacket;
    }
);
