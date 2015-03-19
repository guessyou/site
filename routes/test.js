
//
// 参考数据
//

//需要实现的路由
var routes = [
    ['*', 'before'],
    ['/', 'root'],///****
    ['/offline', 'offline'],///****
    ['/about', 'about'],///****
    ['/news', 'news'],///****
    ['/help', 'help'],///****
    ['/:doc-:type/', 'type'],
    ['/:doc/', 'doc'],
    ['/:doc/:path(*)', 'entry'],
    ['*', 'notFound']///****
];
var routes = [
    ['/', ''],        //get
    ['/reg', ''],     //get post
    ['/login', ''],   //get post
    ['/post', ''],    //get post
    ['/logout', ''],  //get
    ['/upload', ''],  //get post
    ['/archive', ''], //get
    ['/links', ''],
    ['/search[?q=***]', ''],
    ['/tags', 'tag'],    //get
    ['/tags/:tag', 'tag'],
    ['/users', 'users'],
    ['/user/:name', ''],
    ['/p/:_id', ''],
    ['/u/p/:_id', ''],
    ['/edit/:_id', ''],
    ['/remove/:_id', ''],
    ['/reprint/:_id', ''],
    ['', ''],

    //知乎
    ['/topic/:topic[hot|top|questions]', 'topic'],//话题///****
    ['/explore', 'explore'],//发现
    ['/people:user', 'user'],//用户

    //http://stackoverflow.com/
    ['/tags/:tag', 'tag'],//标签
    ['/jobs/:job', ''],
    // /search?q=aaawww
    // /tagged/html
    // tour

    //http://segmentfault.com/
    ['/tags', 'tag'],//标签首页///****
    ['/blogs', 'blogs'],//文章首页
    ['/events', 'events'],//活动首页
    ['/users', 'users'],//用户首页///****
    ['/sites', 'sites'],//子站
    ['/t/:tag[blogs|info]', 'tag'],//标签
    ['/q/:page', 'page'],//文章
    ['/p/:page', 'page'],//文章
    ['/blogs/:user/:page', 'blogs'],//文章
    ['/u/:user', 'user'],//用户
    ['/user/bookmarks', ''],//收藏夹
    ['/user/draft', ''],//草稿
    ['/user/invitation', ''],//邀请朋友加入
    ['/questions/following', 'user'],//关注的问题
    ['/ask', ''],//提问题

    ['/article/apply', ''],//撰写文章-申请

    //http://segmentfault.com/user/oauth/google///****
    //http://segmentfault.com/user/register///****
    //http://segmentfault.com/user/login///****

    ['/questions/[newest|hottest|unanswered]', 'questions'],//问答
    []
];