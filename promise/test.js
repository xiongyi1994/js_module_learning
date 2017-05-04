var wnc = require('wushuu_node_common');
var Model_factory = wnc.Model_factory;
var MODEL_NAME = 'tags_define';
var MODEL_NAME_URL = 'tags_define';
var db_op = wnc.restify
var co = require('co')
var check_user_permission = function(req, res) {
    var owner = getSessionAccount(req)
    if (owner == undefined) {
        return Promise.reject(new Error('login required'))
    }
    return Promise.resolve()
}
var get = db_op.get_gen(MODEL_NAME, MODEL_NAME_URL, check_user_permission)
var list = db_op.list_gen(MODEL_NAME, MODEL_NAME_URL, check_user_permission)
var count = db_op.count_gen(MODEL_NAME, MODEL_NAME_URL, check_user_permission)

var getTagByGroupId = function(tag_group, json) {
    return new Promise((resolve, reject) => {
        wnc.Model_factory(MODEL_NAME).where({
            'tag_group': tag_group
        }).list(result => {
            if (result.code == 1) {
                resolve(result.value)
                    // json.tag = []
                    // result.value.forEach(item => json.tag.push({
                    //     name: item.tag_name,
                    //     id: item.tag_id
                    // }))
                    // json.tag.forEach(item => getTagByGroupId(item.id, item))
                    // console.log('hahha', json)
                    // resolve()
            } else {
                resolve()
                return []
            }
        })
    })

}

var tags_json = function(ctx) {
    var handler = function(req, res) {
        var account_name = req.body.account_name,
            password = req.body.password;
        res.header('Content-Type', 'application/json');
        var account = getSessionAccount(req)
        if (account == undefined) {
            failHandler(res, 'login required!')
            return
        }
        var groupId = 0
        var json = {
            'id': 0
        }
        co(function*() {

            var data = getTagByGroupId(groupId)

            if (data.length != 0) {
                json.tags = []
                data.forEach(item => json.tag.push({
                    name: item.tag_name,
                    id: item.tag_id
                }))


            }

            var getTag = function(groupId, json) {
                return getTagByGroupId(groupId, json).then(data => {
                    if (data.length == 0)
                        return
                    else {
                        json.tag = []
                        data.forEach(item => json.tag.push({
                            name: item.tag_name,
                            id: item.tag_id
                        }))
                        json.tag.forEach(item => getTag(item.id, item))
                        console.log('hahhah = ', json)
                    }
                })
            }
            getTag(groupId, json).then(() => res.send(json))

        })

    }
    ctx.express.get('/tags_define/json', handler);
}


function getSessionAccount(req) {
    var session_account = req.session['account'];
    return session_account;
}

exports.setCtx = function(ctx) {
    list(ctx);
    get(ctx);
    count(ctx);
    tags_json(ctx);
}