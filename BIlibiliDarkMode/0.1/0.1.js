// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  小破站深色模式
// @author       Chen Zihan
// @match        https://www.bilibili.com/*
// @match        https://*.bilibili.com/*
// @grant        none
// ==/UserScript==
(function() {

    var domBody = document.body.style;
    domBody.backgroundColor = "#161819"

    var path = location.pathname

    let css = "";
    css += `
    body {
        background-color: #161819;
    }
    
    .international-header a {
        color: #ccc;
    }
    
    a {
        color: #e7e7e7;
    }
    
    .page-tab .con li {
        border: 0px;
    }
    
    .page-tab .con li .bilifont {
        color: #3e3e3e
    }
    
    .channel-menu-itnl .item .name em {
        opacity: 0.95;
    }
    
    .friendship-link .svg-icon,
    .international-footer .link-box .link-item.link-c a:hover .qrcode,
    .video-card-reco .info-box .info .title {
        opacity: 0.85;
    }
    
    .video-card-reco .info-box:before {
        background: rgba(0, 0, 0, .8);
        opacity: 0.2;
    }
    
    .storey-title .no-link {
        color: #eaeaea;
    }
    
    .storey-title .no-link {
        color: #bbbaba;
    }
    
    .time-line .tab-switch .tab-switch-item {
        color: #c1c1c1;
    }
    
    .pgc-no-data {
        opacity: 0.5;
    }
    
    .tab-switch-item {
        color: #c1c1c1;
    }
    
    .manga-panel .manga-list-box .manga-card .manga-title {
        color: #e7e7e7;
    }
    
    .video-card-common .card-pic a .crown {
        opacity: 0.95;
    }
    
    .live-card .up .txt .desc {
        color: #ccc;
    }
    
    .live-card .up .txt .tag {
        color: #b2b2b2;
    }
    
    .live-list .text-info span {
        color: #e7e7e7;
    }
    
    .rank-header .name {
        color: #eee;
    }
    
    .rank-header .more,
    .exchange-btn .btn {
        border: 1px solid #979797;
        color: #ccc;
    }
    
    .rank-wrap .preview .txt span {
        color: #b2b2b2;
    }
    
    .international-footer {
        background-color: rgb(0 0 0 / 13%);
    }
    
    .international-footer a,
    .international-footer .link-box .link-item.link-c p {
        color: #c1c1c1;
    }
    
    .international-footer .link-box .link-item {
        border-right: 1px solid #c1c1c1;
    }
    
    .contact-help {
        color: #ccc;
        background: #3b3b3b;
        border: 0px solid #e7e7e7;
        box-shadow: 0 6px 10px 0 #212121;
    }
    
    .time-line .tl-link {
        background: #3b3b3b;
        border: 0px;
        color: rgba(255, 255, 255, 0.68);
        border-radius: 20px;
    }
    
    .main-container .media-info .media-right .media-title {
        color: #e2e2e2e8;
    }
    
    .main-container .media-info .media-right .media-desc,
    .main-container .media-info .media-right .pub-wrapper .home-link,
    .main-container .media-info .media-right .pub-wrapper .pub-info {
        color: #e2e2e2f0;
    }
    
    .main-container .media-info,
    .main-container .review-module,
    .main-container .plp-l .comment-wrapper {
        border-top: 1px solid #6d757a;
    }
    
    .main-container .review-module .review-list .review-item .review-body {
        border-radius: 10px;
        background-color: #222;
    }
    
    .main-container .review-module .review-list .review-item .review-title {
        color: #c7bcbc;
    }
    
    .main-container .review-module .review-list .review-item .review-content {
        color: #c7bcbce3;
    }
    
    .main-container .review-module .module-title h4,
    .main-container .recom-wrapper .recom-title,
    .main-container .recom-wrapper .recom-list .recom-item .info-wrapper .video-title,
    .main-container .review-module .module-title .more-link,
    .main-container .plp-l .comment-wrapper .b-head {
        color: #e7e7e7eb;
    }
    
    
    /* 可能在这里中断 */
    
    .bb-comment,
    .comment-bilibili-fold {
        background-color: #161819!important;
    }
    
    
    /* 评论背景颜色 */
    
    .bb-comment .comment-list .list-item .text,
    .comment-bilibili-fold .comment-list .list-item .text,
    .bb-comment .comment-list .list-item .user .text-con,
    .comment-bilibili-fold .comment-list .list-item .user .text-con {
        color: #e7e7e7e0!important;
    }
    
    .bb-comment .comment-list .list-item .info>span,
    .comment-bilibili-fold .comment-list .list-item .info>span {
        color: #ffffffb3!important;
    }
    
    .bb-comment .comment-send .textarea-container textarea,
    .comment-bilibili-fold .comment-send .textarea-container textarea {
        background-color: #2b2b2b!important;
        border: 0px!important;
        color: #e2e2e2!important;
    }
    
    .bb-comment .comment-send .textarea-container:hover textarea,
    .comment-bilibili-fold .comment-send .textarea-container:hover textarea,
    .bb-comment .comment-send .textarea-container.focus textarea,
    .comment-bilibili-fold .comment-send .textarea-container.focus textarea {
        border: 1px solid #00a1d6!important;
        color: #e2e2e2!important;
    }
    
    
    /* 评论、去边框、点击出蓝框*/
    
    .bb-comment .comment-send .textarea-container:hover textarea,
    .comment-bilibili-fold .comment-send .textarea-container:hover textarea,
    .bb-comment .comment-send .textarea-container.focus textarea,
    .comment-bilibili-fold .comment-send .textarea-container.focus textarea {
        color: #505050!important;
    }
    
    
    /* 评论显示状态 */
    
    .bilibili-player-video-sendbar {
        background: #212121!important;
    }
    
    
    /* 视频底框 */
    
    .bilibili-player-video-info {
        color: #ded9d9!important;
    }
    
    
    /* 底框视频信息 */
    
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar {
        color: #999!important;
        background-color: #505050;
    }
    
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-danmaku-input {
        color: #ccd0d7!important;
    }
    
    
    /* 底框评论栏、输入文字 */
    
    .bilibili-player .bui-button.bui-button-blue,
    .bilibili-player .bui-button.bui-button-gray3:hover,
    .bilibili-player .bui-button.bui-button-gray:hover {
        opacity: 0.9!important;
    }
    
    
    /* 发送按键 */
    
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-inputbar-wrap {
        border: 0px!important;
        background-color: #505050!important;
    }
    
    
    /* 去评论边框 */
    
    .main-container .review-module .review-list .empty-wrapper .btn-go-write {
        background-color: #222;
        border-radius: 20px;
    }
    
    
    /* 无点评时按钮 */
    
    .bilibili-player {
        box-shadow: 0 0 8px #040404!important;
    }
    
    
    /* 视频阴影设置 */
    
    .main-container .tool-bar .watch-info .watch-more,
    .main-container .tool-bar .share-info .share-more,
    .main-container .tool-bar .mobile-info .mobile-more {
        background: #222;
        border: 0px solid #e5e9ef!important;
        box-shadow: 0 2px 4px 0 #131212!important;
        border-radius: 10px;
    }
    
    .main-container .tool-bar .watch-info .watch-more .title {
        color: #bbb;
    }
    
    .main-container .tool-bar .watch-info .watch-more .action-wrap .watch-action .main-title,
    .main-container .tool-bar .watch-info .watch-more .action-wrap .watch-action .sub-title {
        color: #e2e2e2;
    }
    
    .main-container .tool-bar .watch-info .watch-more .action-wrap .watch-action.match-watch,
    .main-container .tool-bar .watch-info .watch-more .action-wrap .watch-action.create-watch {
        opacity: 0.95;
    }
    
    
    /* 一起看 */
    
    .main-container .tool-bar .mobile-info .mobile-more .top-wrapper {
        color: #fff!important;
    }
    
    .main-container .tool-bar .coin-info i,
    .main-container .tool-bar .like-info i,
    .main-container .tool-bar .coin-info span,
    .main-container .tool-bar .like-info span,
    .main-container .tool-bar .share-info i,
    .main-container .tool-bar .share-info span,
    .main-container .tool-bar .mobile-info i,
    .main-container .tool-bar .mobile-info span,
    .main-container .tool-bar .watch-info span,
    .main-container .tool-bar .watch-info span {
        color: #ffffffad!important;
    }
    
    
    /* 点赞投币分享栏icon font */
    
    .bb-comment .comment-header .tabs-order li,
    .comment-bilibili-fold .comment-header .tabs-order li {
        color: #ffffffb5!important;
    }
    
    
    /* 评论排序白字 */
    
    .bb-comment .comment-header,
    .comment-bilibili-fold .comment-header {
        border-bottom: 1px solid #e5e9ef8a!important;
    }
    
    
    /* 评论横线降亮度 */
    
    .bb-comment .comment-list .list-item .con,
    .comment-bilibili-fold .comment-list .list-item .con {
        border-top: 1px solid #e5e9ef8a!important;
    }
    
    
    /* 右侧 */
    
    .ep-section-module,
    .main-container .ep-list-wrapper {
        background-color: #222222;
        border-radius: 10px;
    }
    
    .ep-section-module .section-title,
    .main-container .ep-list-wrapper .list-title h4 {
        color: #e7e7e7e8;
    }
    
    .ep-list-wrapper .ep-item,
    .section-ep-wrapper .ep-item {
        color: #e7e7e7e0;
    }
    
    .ep-list-wrapper .ep-item.cursor,
    .section-ep-wrapper .ep-item.cursor {
        background-color: #46484a;
    }
    
    .ep-list-wrapper .ep-item:hover,
    .section-ep-wrapper .ep-item:hover {
        background-color: #525456bd;
    }
    
    
    /* 剧集选择框 */
    
    .main-container .ep-list-wrapper .list-wrapper.simple ul .ep-item {
        border-radius: 4px;
        background-color: #ffffff4a;
        border: 0px;
    }
    
    
    /* 弹幕库 */
    
    .player-auxiliary-area .player-auxiliary-filter,
    .bui-collapse .bui-collapse-header {
        color: #222;
    }
    
    .main-container .plp-r .danmaku-box .danmaku-wrap {
        border-radius: 10px;
        background-color: #222;
    }
    
    .player-auxiliary-area .player-auxiliary-filter-title {
        color: #e5e9ef;
    }
    
    .player-auxiliary-area .player-auxiliary-filter {
        border-top-left-radius: 10px;
    }
    
    .bui-collapse .bui-collapse-header .bui-collapse-arrow {
        color: #a7a7a7;
    }
    
    .player-auxiliary-area .player-auxiliary-filter .player-auxiliary-setting-menu-wrap {
        background-color: #4e4e4e;
        -webkit-box-shadow: 0 2px 4px 0 #1b1b1b;
        box-shadow: 0 2px 4px 0 #1b1b1b;
        background-color: #798086;
    }
    
    .player-auxiliary-area .player-auxiliary-filter .player-auxiliary-setting-menu-wrap .player-auxiliary-setting-menu-list,
    .player-auxiliary-area .player-auxiliary-filter .player-auxiliary-setting-menu-wrap {
        background-color: #4e4e4e;
    }
    
    
    /* header */
    
    
    /* body */
    
    
    /* 评论username */
    
    .bb-comment .comment-list .list-item .user .name,
    .comment-bilibili-fold .comment-list .list-item .user .name {
        color: #e4e9ecf2;
    }
    
    
    /* 展开收起 */
    
    .main-container .media-info .media-right .media-desc i {
        background-color: #151718!important;
    }
    
    .main-container .media-info .media-right .media-tool-bar .btn-follow span,
    .main-container .media-info .media-right .media-tool-bar .btn-follow i {
        color: #ffffffcc;
    }
    
    .main-container .media-info .media-right .media-tool-bar .btn-follow.active {
        background-color: #505050!important;
    }
    
    .main-container .media-info .media-right .media-tool-bar .bangumi-options .opt-list {
        border: 0px;
        border-radius: 10px;
        box-shadow: 0 2px 4px #000000c2!important;
        background-color: #222;
    }
    
    .main-container .media-info .media-right .media-tool-bar .bangumi-options .opt-list li {
        color: #999;
    }
    
    .main-container .media-info .media-right .media-tool-bar .bangumi-options .opt-list li:hover {
        color: #00a0d6b6;
        background-color: #99999982;
    }
    
    
    /* 追番按钮 */
    
    .main-container .media-info .media-right .pub-wrapper .av-link {
        color: #d0c7c7;
    }
    
    
    /* avbv */
    
    
    /* .main-container .media-info .media-right .media-tool-bar .btn-rating {
        border: 1px solid #5050509e;
        color: #ffffffa1;
    } */
    
    
    /* 点评 */
    
    .short-review-masker .short-review-content {
        background: #222;
        border-radius: 20px;
    }
    
    .review-edit-header .review-edit-media-info h4 {
        color: #e2e2e2;
    }
    
    .review-edit-header .review-edit-media-info .rate-tip {
        color: #e2e2e2c4;
    }
    
    .short-review-masker .short-review-content .review-body-wrap textarea {
        color: #e2e2e2;
    }
    
    
    /* 点评内部 */
    
    
    /* 不写了 */
    
    
    /* 搜索页面首页 */
    
    
    /* 搜索里页 */
    
    html {
        background-color: #161819!important;
    }
    
    
    /* 顶部 */
    
    .international-header .mini-type,
    .van-popover .mini-type {
        background: #222;
        box-shadow: 0 2px 4px 0 #222;
    }
    
    
    /* 背景 */
    
    .van-popover.van-popper.van-popper-avatar {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
    }
    
    
    /* 阴影 */
    
    .van-popover {
        background: #222;
    }
    
    
    /* 背景 */
    
    .van-popper-avatar .level-info .grade[data-v-cfdd0dd8] {
        color: #e7e7e7;
    }
    
    .van-popper-avatar .level-info .progress[data-v-cfdd0dd8] {
        color: #b9b9b9;
    }
    
    
    /* 等级 */
    
    .international-header a,
    .van-popover a {
        color: #f4f4f4;
    }
    
    .van-popper-avatar .count-item .item-value[data-v-cfdd0dd8] {
        color: #e5e9ef;
    }
    
    
    /* coin */
    
    
    /* 关注分组页面 */
    
    .follow-dialog-wrap .follow-dialog-window {
        background: #222!important;
        border-bottom: 1px solid #505050!important;
        color: #e7e7e7e6!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list li {
        color: #e7e7e7e6!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list li .special-tip {
        color: #b4bdc5!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .info {
        color: #aeb8c1!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .info .uname {
        color: #9aa4ab!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .bottom {
        border-top: 1px solid #505050!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list .add-group .add-btn {
        border: 1px solid #adacac!important;
        color: #929ca2!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .bottom .btn {
        opacity: 0.9!important;
    }
    
    
    /* 新建组 */
    
    .follow-dialog-wrap .follow-dialog-window .bottom .btn:disabled {
        background-color: #525252!important;
        color: #a6a9af!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list .add-group .input-group {
        border: 1px solid #00a1d6b3!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list .add-group .input-group .submit {
        background: #00b5e51c!important;
        border-left: 1px solid #00a1d6b3!important;
        color: #00a1d6!important;
    }
    
    
    /* //!important	不加可能无效 */
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list .add-group .input-group input {
        background-color: #222!important;
        color: #e5e9efe8!important;
    }
    
    .follow-dialog-wrap .follow-dialog-window .content .group-list ul .follow-group-mask {
        background: #fff0!important;
    }
    
    
    /* //分组 加!important */
    
    
    /* //消息 */
    
    .im-list-box {
        color: #e5e9eff2!important;
        background: #222!important;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    }
    
    .i-frame iframe[data-v-01c9e08c] {
        background: #fff0!important;
        border-bottom-left-radius: 15px!important;
        border-bottom-right-radius: 15px!important;
        -webkit-box-shadow: 0 3px 6px 0 #000!important;
        box-shadow: 0 3px 6px 0 #000!important;
    }
    
    .i-frame[data-v-01c9e08c]::before {
        background-color: #222!important;
        -webkit-box-shadow: -1px -1px 1px #000!important;
        box-shadow: -1px -1px 1px #000!important;
    }
    
    
    /* //历史 */
    
    .im-list:hover {
        color: #f4f4f4e8 !important;
        background-color: #101010a8!important;
    }
    
    .van-popover {
        border: 0px solid #ebeef5!important;
        color: #d2d5dc!important;
        border-radius: 15px!important;
        background: #222!important;
    }
    
    .van-popper-history .tab-header[data-v-8e2b2858] {
        border-bottom: 1px solid #757575!important;
    }
    
    .header-video-card .video-info .line-2[data-v-37582e0a] {
        color: #f4f5f7d9!important;
    }
    
    .van-popper-history .view-all[data-v-8e2b2858] {
        background: #88888866!important;
        color: #e2e2e2d9!important;
        border-radius: 10px!important;
    }
    
    
    /* //历史位置 */
    
    .follow-dialog-wrap .follow-dialog-window {
        background: #222!important;
        border-radius: 15px!important;
    }
    
    
    /* //	关注组圆角 */
    
    
    /* 
    common
    background #161819;
    title #e5e9ef
    title2 #e7e7e7e8;
    
    line #6d757a
    text #e2e2e2
    text2 #e2e2e2f0;
    text3 light #ddd;
    btn text color #ffffffcc
    btn background color #505050
    btn hover background color #4a4b4e;
    
    */
    
    
    /* follow window title line */
    
    
    /* title #e5e9ef line #6d757a*/
    
    .follow-dialog-wrap .follow-dialog-window .title {
        color: #e5e9ef!important;
        border-bottom: 1px solid #6d757a !important;
    }
    
    
    /* comment textarea color focus e2e2e2 */
    
    .bb-comment .comment-send .textarea-container:hover textarea,
    .comment-bilibili-fold .comment-send .textarea-container:hover textarea,
    .bb-comment .comment-send .textarea-container.focus textarea,
    .comment-bilibili-fold .comment-send .textarea-container.focus textarea {
        color: #e2e2e2 !important;
    }
    
    
    /* rate  */
    
    .main-container .media-info .media-right .media-tool-bar .btn-rating {
        border: 1px solid #5050509e;
        color: #ffffffcc;
    }
    
    .main-container .media-info .media-right .media-tool-bar .btn-rating {
        background-color: #505050;
    }
    
    .main-container .media-info .media-right .media-tool-bar .btn-rating:hover {
        background-color: #4a4b4e;
    }
    
    
    /* vip tip */
    
    .main-container .pay-bar .vip .btn-pay.active {
        color: #e7e7e7e8;
        background-color: #222!important;
        border-radius: 10px;
        border: 0px;
    }
    
    
    /* side nav bar */
    
    .main-container .nav-tools .tool-item {
        background: #505050;
        border: 0px;
        color: #ffffffcc;
    }
    
    
    /* page box */
    
    .paging-box-big .current,
    .paging-box-big .next,
    .paging-box-big .prev,
    .paging-box-big .tcd-number,
    .paging-box-big .dian {
        background: #505050!important;
        border: 0px!important;
        color: #ffffffcc!important;
    }
    
    
    /* page jump box */
    
    .paging-box-big .page-jump input {
        border: 1px solid #505050!important;
        background-color: #505050;
        color: #ffffffcc;
    }
    
    
    /* comment info fix*/
    
    .bb-comment .comment-list .list-item .info .btn-hover:hover,
    .comment-bilibili-fold .comment-list .list-item .info .btn-hover:hover {
        color: #00a1d6;
        background: #161819;
    }
    
    
    /* tsuzuku! */
    
    
    /* page video uploader */
    
    .video-info .video-title {
        color: #e5e9ef;
    }
    
    .recommend-list .rec-title {
        color: #e7e7e7e8;
    }
    
    .info .title[data-v-3a7137fb] {
        color: #e7e7e7e8;
    }
    
    .video-desc .info {
        color: #e2e2e2f0;
    }
    
    
    /* comment title */
    
    .comment-m .b-head {
        color: #e7e7e7e8;
    }
    
    
    /* comment up think it is good */
    
    .bb-comment .comment-list .list-item .info .reply-tags span,
    .comment-bilibili-fold .comment-list .list-item .info .reply-tags span {
        background: #505050!important;
        border-radius: 12px!important;
        color: #ffffffcc!important;
    }
    
    
    /* tag */
    
    .s_tag .tag-area>li {
        background: #505050;
        border: 1px solid #505050;
    }
    
    .s_tag .tag-area>li .tag-link {
        color: #ffffffcc;
    }
    
    .s_tag .btn-add {
        background: #505050;
    }
    
    .s_tag .btn-add span {
        background: #ffffffcc;
    }
    
    
    /* for up charge */
    
    .up-info .btn-panel .not-follow-charge-btn {
        background: #161819;
    }
    
    
    /* toolbar */
    
    .video-toolbar .ops>span i {
        color: #ddd;
    }
    
    .video-toolbar .ops>span {
        color: #ddd;
    }
    
    
    /* appeal text toolbar */
    
    .video-toolbar .appeal-text {
        color: #ddd;
    }
    
    
    /* show more */
    
    .video-desc .btn span {
        cursor: pointer;
        color: #e2e2e2f0;
    }
    
    
    /* activity show */
    
    .activity-m.act-now .l-inside .hinter-msg {
        line-height: 20px;
        color: #e2e2e2f0;
    }
    
    
    /* comment common name fix */
    
    
    /* Light */
    
    .bb-comment .comment-list .list-item .user .name,
    .comment-bilibili-fold .comment-list .list-item .user .name {
        color: #e2e2e2f0;
    }
    
    
    /* comment view more  */
    
    .bb-comment .comment-list .list-item .reply-box .view-more,
    .comment-bilibili-fold .comment-list .list-item .reply-box .view-more {
        color: #ababab!important;
    }
    
    
    /* comment view more :hover fix */
    
    .bb-comment .comment-list .list-item .reply-box .view-more .btn-more:hover,
    .comment-bilibili-fold .comment-list .list-item .reply-box .view-more .btn-more:hover {
        background: #161819!important;
    }
    
    
    /* comment page change bar */
    
    .paging-box .current,
    .paging-box .next,
    .paging-box .prev,
    .paging-box .tcd-number,
    .paging-box .dian {
        color: #e2e2e2f0!important;
    }
    
    .paging-box .result {
        color: #e2e2e2f0;
    }
    
    
    /* comment follow after */
    
    .bb-comment .comment-list .list-item .user-face .hot-follow .follow-btn.followed,
    .comment-bilibili-fold .comment-list .list-item .user-face .hot-follow .follow-btn.followed {
        background: #6d757a!important;
        color: #e5e9ef!important;
    }
    
    
    /* review name fix*/
    
    .main-container .review-module .review-list .review-item .review-header .review-author {
        color: #e2e2e2f0;
    }
    
    
    /* up info message */
    
    .up-info .up-info_right .name .message {
        color: #e2e2e2f0;
    }
    
    .up-info .up-info_right .name .message i {
        color: #e2e2e2f0;
    }
    
    
    /* desc */
    
    
    /* info light description */
    
    .up-info .up-info_right .desc {
        color: #ababab;
    }
    
    
    /* video card box desc */
    
    .video-page-card .card-box .info .count a {
        color: #ababab;
    }
    
    .video-page-card .card-box .info .count {
        color: #ababab;
    }
    
    .video-info .video-data {
        color: #ababab;
    }
    
    .video-desc .tip-info .argue,
    .video-desc .tip-info .copyright {
        color: #ababab;
    }
    
    
    /* user-card */
    
    .user-card {
        border-radius: 10px!important;
        border: 0px!important;
        background: #222!important;
        box-shadow: black 0 2px 4px!important;
    }
    
    .user-card .info p {
        color: e2e2e2f0!important;
    }
    
    .user-card .info .sign {
        color: #ababab!important;
    }
    
    .user-card .btn-box .message {
        background: #222!important;
    }
    
    
    /* page at index */
    
    .bypb-window .online {
        border: 1px solid #212121;
        border-radius: 2px;
        background: #212121;
        color: #6f6f6f;
    }
    
    
    /* video page epi select */
    
    .multi-page {
        background: #222;
        border-radius: 10px;
        box-shadow: 0 1px 2px #0e0e0e;
    }
    
    .multi-page .head-con .head-left h3 {
        color: #e7e7e7e8;
    }
    
    .multi-page .cur-list .list-box li.on {
        background: #46484a;
    }
    
    .multi-page .cur-list .list-box li:hover {
        background: #595c5f;
    }
    
    .multi-page .cur-list .list-box li a {
        color: #e7e7e7e8;
    }
    
    .multi-page .cur-list .module-box li {
        background: #505050;
        border: 1px solid #505050!important;
    }
    
    
    /* video member info */
    
    .members-info .avatar .info-tag[data-v-97401e06] {
        background: #222;
    }
    
    .members-info__header[data-v-97401e06] {
        background-color: #5050505c;
    }
    
    .members-info__header .title[data-v-97401e06] {
        color: #e2e2e2f0;
    }
    
    
    /* anime index */
    
    
    /* title */
    
    bangumi-home-crumb .fcname ul.n_num li a {
        height: 27px;
        font-size: 14px;
        color: #e2e2e2f0;
    }
    
    
    /* update title list */
    
    .block-area .timeline-title .headline .name {
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
        float: left;
        color: #e7e7e7e8;
    }
    
    .timeline-box .timeline-item .item-right a {
        color: inherit;
        text-align: left;
        display: block;
        color: #e7e7e7e8;
        height: 100%;
    }
    
    
    /* my follow title list */
    
    .block-area .follow-wrapper .follow-head {
        color: #e7e7e7e8;
    }
    
    .follow-item .details .season-title {
        color: #e7e7e7e8;
    }
    
    
    /* bottom title*/
    
    .index-entry-wrapper .filter-block-title span {
        color: #e7e7e7e8;
    }
    
    .index-entry-wrapper .filter-block-title a {
        color: #e7e7e7e8;
    }
    
    .spread-module .num {
        /* fix */
        background-color: #171819;
    }
    
    .spread-module .t {
        color: #e7e7e7e8;
    }
    
    .pgc-rank-list .rank-item .ri-detail .ri-title {
        color: #e7e7e8;
    }
    
    .new-stat-module .zone-title .headline .name {
        color: #e7e7e8;
    }
    
    .video-item-biref .biref-info .biref-title {
        color: #e7e7e7e8;
    }
    
    .sec-rank .rank-head h3 {
        color: #e7e7e7e8;
    }
    
    .handpick-right-module .block-header .block-title {
        color: #e7e7e7e8;
    }
    
    .block-area .block-left .block-header .block-title {
        color: #e7e7e7e8;
    }
    
    .recom-right-head h3 {
        color: #e7e7e7e8;
    }
    
    .pgc-common-tab .bili-tab-item {
        color: #e2e2e2f0;
    }
    
    .bangumi-home-crumb .fcname ul.n_num li a {
        color: #e7e7e7e8;
    }
    
    .sub-nav-m ul li a {
        color: #e7e7e7e8;
    }
    
    .bangumi-home-crumb .fcname ul.n_num li {
        color: #e7e7e7e8;
    }
    
    .energy-m .headline {
        color: #e2e2e2;
    }
    
    .video-floor-m .zone-title .headline .name {
        color: #e2e2e2;
    }
    
    .energy-m .hot-box li:first-child .txt {
        color: #e2e2e2;
    }
    
    .energy-m .hot-box li .txt {
        color: #e2e2e2;
    }
    
    .rank-list .rank-item .ri-detail .ri-title {
        color: #e2e2e2;
    }
    
    .bili-tab .bili-tab-item {
        color: #e2e2e2;
    }
    
    
    /* user page */
    
    .n .n-inner {
        background: #222;
        box-shadow: 0 0 0 1px #222;
    }
    
    .n .n-data .n-data-v {
        color: #e7e7e7e8;
    }
    
    .g-search input {
        color: #e7e7e7e8;
        border: 1px solid #222;
        background: #505050;
    }
    
    #page-index .col-2 .section {
        background: #222;
        border: 1px solid #222;
        border-radius: 10px;
    }
    
    section-title {
        color: #e7e7e7e8;
    }
    
    .user .info .meta .row:first-child {
        color: #e7e7e7e8;
    }
    
    #page-index .col-1 {
        background: #222;
    }
    
    
    /* tabs */
    
    .international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link,
    .van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link {
        color: #e5e9ef;
    }
    
    .mini-type .nav-user-center .user-con .item .name {
        color: #e5e9ef;
    }
    
    
    /* tab-user */
    
    .van-popper-avatar .level-info .grade[data-v-59fd5a91] {
        color: #999999;
    }
    
    .van-popper-avatar .count-item .item-value[data-v-59fd5a91] {
        color: #f4f4f4;
    }
    
    .van-popper-avatar .links .link-title[data-v-59fd5a91] {
        color: #f4f4f4;
    }
    
    .van-popper-avatar .link-icon[data-v-59fd5a91] {
        color: #f4f4f4;
    }
    
    .van-popper-avatar .logout[data-v-59fd5a91] {
        color: #f4f4f4;
    }
    
    
    /* user page */
    
    #page-index .col-2 .section .user-auth.no-auth .no-auth-title .goto-auth {
        color: #e5e9ef;
    }
    
    #page-index .col-2 .section-title {
        color: #e7e7e7e8;
    }
    
    .large-item .title {
        color: #e7e7e7e8;
    }
    
    
    /* search bar */
    
    .bili-header-m .nav-search #nav_searchform,
    .international-header .nav-search #nav_searchform {
        border-radius: 20px;
        background-color: #505050;
    }
    
    .bili-header-m .nav-search .nav-search-keyword,
    .international-header .nav-search .nav-search-keyword {
        color: #ffffffcc!important;
    }
    
    .bili-header-m .nav-search .nav-search-btn,
    .international-header .nav-search .nav-search-btn {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    
    .bili-header-m .nav-search .nav-search-btn,
    .international-header .nav-search .nav-search-btn {
        background: #737373;
    }
    
    .bili-header-m .nav-search .nav-search-submit,
    .international-header .nav-search .nav-search-submit {
        color: #c3c3c3;
    }
    
    input::placeholder {
        color: #ababab;
    }
    
    
    /* dymanic information */
    
    .card[data-v-2dbadba2],
    .card[data-v-73fb1623] {
        border: 1px solid #161819!important;
        background: #222!important;
        border-radius: 20px!important;
        box-shadow: 0px 2px 4px #131111;
    }
    
    .content-ellipsis[data-v-8af6e2ec],
    .content-full[data-v-b3414e94] {
        color: #ddd;
    }
    
    .feed-card .loading-content .loading-text[data-v-87ed4514] {
        background: #222!important;
    }
    
    .feed-card .empty-content[data-v-87ed4514] {
        background: #222!important;
    }
    
    .feed-card .loading-content .loading-text .loading-img[data-v-87ed4514] {
        display: none;
    }
    
    .card .main-content .user-name a[data-v-2dbadba2] {
        color: #ddd!important;
    }
    
    .col-full {
        background: #222;
        box-shadow: 1px 2px 0 1px #222;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    
    
    /* user page other */
    
    #page-index .col-2 .section {
        background: #222;
    }
    
    #page-index .i-ann-content {
        color: #eee;
    }
    
    #page-index .col-2 .section-title {
        color: #eee;
    }
    
    #page-index .col-1 {
        background: #222;
    }
    
    
    /* 首页右侧 */
    
    .elevator .list-box {
        background: #222;
    }
    
    .elevator .list-box .item {
        background: #222;
        color: #fffffff0;
    }
    
    .elevator .list-box .item.on,
    .elevator .list-box .item:hover {
        color: #fffffff0;
    }
    
    
    /* 顶部 */
    
    
    /* 大会员 */
    
    .vip-m .bubble-traditional .recommand .title {
        color: #fffffff0;
    }
    
    .vip-m .bubble-traditional .recommand .bubble-col .item .recommand-link {
        color: #fffffff0;
    }
    
    
    /* 收藏 */
    
    .van-popper-favorite .tab-item .title[data-v-64b63b5f] {
        color: #fffffff0;
    }
    
    .van-popper-favorite .tab-item--normal[data-v-64b63b5f]:hover {
        background-color: #f4f4f433;
    }
    
    .header-video-card[data-v-37582e0a]:hover {
        background-color: #f4f4f433;
    }
    
    
    /* 动态 */
    
    .user-panel .content .bottom .number-part .numbers[data-v-f8464120] {
        color: #ddd;
    }
    
    .tc-black {
        color: #ddd;
    }
    
    .user-panel[data-v-f8464120] {
        background: #222;
    }
    
    .live-panel[data-v-2e6e2559] {
        background-color: #222;
    }
    
    .live-panel-item .live-detail .up-name[data-v-34bb1f0d] {
        color: #ddd;
    }
    
    .notice-panel[data-v-64440e39] {
        background-color: #222;
    }
    
    .new-topic-panel[data-v-58cf9fb5] {
        background-color: #222;
    }
    
    .new-topic-panel .tag-item .content[data-v-58cf9fb5] {
        color: #ddd;
    }
    
    .new-topic-panel .tag-item .label[data-v-58cf9fb5] {
        background: #3a3e44;
        color: #c3c3c3;
    }
    
    
    /* 视频盒子 */
    
    .video-container[data-v-0514ecc0] {
        background: #2b2b2b;
        border-radius: 10px;
        border: 0px solid #e5e9ef;
        z-index: 1;
    }
    
    .video-container .text-area .title[data-v-0514ecc0] {
        color: #ddd;
    }
    
    .video-container .text-area .content[data-v-0514ecc0] {
        color: #b3b1b1;
    }
    
    .content-ellipsis[data-v-b3414e94] {
        color: #ddd;
    }
    
    .card-content .repost[data-v-28104db4],
    .card-content .not-support[data-v-28104db4],
    .card-content .deleted[data-v-28104db4] {
        background-color: #2b2b2b;
    }
    
    
    /* shop dongtai */
    
    .shop-panel .shop-list[data-v-130673ff] {
        background-color: #2b2b2b;
    }
    
    .shop-desc .desc-box .title[data-v-2277fe03] {
        color: #ddd;
    }
    
    
    /* up */
    
    .most-viewed-panel[data-v-194fc7aa] {
        background: #222;
        border-radius: 10px;
    }
    
    .most-viewed-panel .list-content .most-viewed-item .name[data-v-194fc7aa] {
        color: #cacaca;
    }
    
    
    /* up text publish*/
    
    .home-page .home-container .home-content .center-panel .section-block[data-v-004f7360] {
        border-radius: 10px;
        background-color: #222;
    }
    
    .publish-panel[data-v-4531f45f] {
        background-color: #2b2b2b;
    }
    
    .core-style[data-v-655ff91e] {
        color: #ddd;
        background-color: #2b2b2b;
    }
    
    .core-style[data-v-655ff91e]:hover,
    .core-style[data-v-655ff91e]:focus,
    .core-style[data-v-655ff91e]:active {
        background: #2b2b2b;
    }

    .live-container[data-v-23b19018] {
        background: #2b2b2b;
        border-radius: 10px;
        border: 0px solid #e5e9ef;
    }
    
    .tab-bar[data-v-58304b2a] {
        background: #222;
        border-radius: 10px;
    }
    
    
    /* article */
    
    .article-container .text-area[data-v-3d352df6] {
        background-color: #2b2b2b;
    }
    
    .article-container .text-area .title[data-v-3d352df6] {
        color: #ddd;
    }
    
    .article-container[data-v-3d352df6] {
        background: #2b2b2b;
        border-top: 0px solid #e5e9ef;
        border: 0px solid #e5e9ef;
        border-radius: 10px;
    }
    
    .article-container .text-area .content[data-v-3d352df6] {
        color: #949292;
    }
    
    
    /* music */
    
    .music-container[data-v-7d9db8c7] {
        border-top: 0px solid #e5e9ef;
        border: 0px solid #e5e9ef;
        border-radius: 10px;
    }
    
    .bg-white {
        background-color: #2b2b2b;
    }
    
    
    /*  */
    
    .shop-panel .shop-list.is-repost[data-v-130673ff] {
        background-color: #3a3939;
        border-radius: 10px;
    }
    
    
    /* bangumi comment add*/
    
    .bb-comment .comment-send.comment-send-lite,
    .comment-bilibili-fold .comment-send.comment-send-lite,
    .bb-comment .comment-send-lite.comment-send-lite,
    .comment-bilibili-fold .comment-send-lite.comment-send-lite {
        background: #161819;
    }
    
    
    /* search index */
    
    .video-item.matrix .title {
        color: #ddd;
    }
    
    .video-item.matrix {
        border: 0px solid #e5e9ef;
        border-radius: 8px;
        background: #222;
    }
    
    .filter-wrap .filter-item a {
        color: #ddd;
    }
    
    #navigator .v-switcher-header-item a {
        color: #ddd;
    }
    
    #navigator .v-switcher-header-item a span {
        color: #9fa9af;
    }
    
    .page-wrap .pager {
        background: #161819;
    }
`;
    if (path.search("/video") == 0) {
        let css = "";
        css += ``
    }
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css);
    } else {
        let styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode);
    }
})();