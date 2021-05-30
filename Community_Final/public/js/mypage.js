// edit-open : hidden or not
import { subController } from "./classes/index.js";
// 형 검사 
const info = class {
    checkData() { throw 'checkData must override'; }
};
const fetchInfo = class extends info {
    constructor(body) {
        super();
        this.body = body;
    }
    checkData() {
        if (!this.body.content)
            this.body.content = '';
        return this.body;
    }
};
const fetchReq = (url, body) => {
    body = new fetchInfo(body).checkData();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: body.content,
            contentId: body.contentId
        })
    })
        .then(res => res.json())
        .then(res => {
        if (res.message == 'failed') {
            alert("Error");
        }
        else {
            window.location.reload();
        }
    });
};
const mypageServiceDisplay = class {
    ctrlEditDisplayHtml(y_edit_Html, n_edit_Html) {
        y_edit_Html.hidden = !y_edit_Html.hidden;
        n_edit_Html.hidden = !n_edit_Html.hidden;
    }
};
const err = (v) => { throw v; };
const mypageSubController = class extends subController {
    constructor(postClassNm, cmtClassNm) {
        super();
        this.mypageDomElems = { 'post': '', 'comment': '' };
        this.createClickHandler = (type) => (e) => {
            let editContentsDiv = this.getHtmlElement(`${type}-edit-open`, e.currentTarget);
            let editBtnsDiv = this.getHtmlElement(`${type}-edit-buttons`, e.currentTarget);
            let content = this.getHtmlElement(`${type}-description`, e.currentTarget);
            let editContent = this.getHtmlElement(`${type}-edit-input`, e.currentTarget);
            let contentId;
            // display change
            if (e.target.id == `${type}-edit` || e.target.id == `${type}-cancel`) { // 수정 button
                // edit content에 내용 넣기 
                if (editContent && content)
                    editContent.value = content.innerText;
                new mypageServiceDisplay().ctrlEditDisplayHtml(editContentsDiv, editBtnsDiv);
            }
            // edit
            if (e.target.id == `${type}-insert`) {
                contentId = this.getHtmlElement(`${type}-id`, e.currentTarget);
                if (!contentId)
                    err(`No ${type} Id`);
                if (editContent && contentId)
                    fetchReq(`/community/edit${type}`, { content: editContent.value, contentId: Number(contentId.innerText) });
            }
            // delete
            if (e.target.id == `${type}-delete`) {
                contentId = this.getHtmlElement(`${type}-id`, e.currentTarget);
                if (!contentId)
                    err(`No ${type} Id`);
                fetchReq(`/community/delete${type}`, { contentId: Number(contentId.innerText) });
            }
        };
        this.assignClickHandler = () => {
            this.mypageDomElems['post'].forEach((elem) => elem.addEventListener('click', this.createClickHandler('post')));
            this.mypageDomElems['comment'].forEach((elem) => elem.addEventListener('click', this.createClickHandler('comment')));
        };
        this.mypageDomElems['post'] = document.querySelectorAll(`${postClassNm}`);
        this.mypageDomElems['comment'] = document.querySelectorAll(`${cmtClassNm}`);
    }
};
const mypageSubCtlr = new mypageSubController('[data-post]', '[data-comment]');
mypageSubCtlr.assignClickHandler();
export const getHtmlElement = (className, domElem) => { return domElem.querySelector(`.${className}`); };
/*

export const getHtmlElement=(className : string, domElem:HTMLElement|Document):HTMLElement|null=> domElem.querySelector(`.${className}`)
const ctrlEditDisplayHtml=(y_edit_Html:HTMLElement,n_edit_Html:HTMLElement)=>{
    y_edit_Html.hidden = !y_edit_Html.hidden; n_edit_Html.hidden = !n_edit_Html.hidden
}
const createClickHandler=(type:string)=>(e:any)=>{
    let editContentsDiv = getHtmlElement(`${type}-edit-open`,e.currentTarget) as HTMLDivElement
    let editBtnsDiv     = getHtmlElement(`${type}-edit-buttons`,e.currentTarget) as HTMLDivElement
    let content         = getHtmlElement(`${type}-description`,e.currentTarget) as HTMLParagraphElement
    let editContent     = getHtmlElement(`${type}-edit-input`,e.currentTarget) as HTMLTextAreaElement
    let contentId ;
    // display change
    if(e.target.id == `${type}-edit` || e.target.id == `${type}-cancel`){ // 수정 button
        // edit content에 내용 넣기
        if(editContent && content) editContent.value = content.innerText
        ctrlEditDisplayHtml(editContentsDiv!,editBtnsDiv!)
    }
    // edit
    if(e.target.id==`${type}-insert`){
        contentId = getHtmlElement(`${type}-id`,e.currentTarget)
        if(!contentId) throw `No ${type} Id`
        if(editContent && contentId) editFetch(editContent.value,Number(contentId.innerText),type)
    }
    // delete
    if(e.target.id==`${type}-delete`){
        contentId = getHtmlElement(`${type}-id`,e.currentTarget)
        if(!contentId) throw `No ${type} Id`
        deleteFetch(Number(contentId!.innerText),type)
    }
}
const editFetch=(content:string,contentId:number,type:string)=>{
    console.log("hello")
    fetch(`/community/edit${type}`,
        {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content,contentId
            })
        })
        .then(res => res.json())
        .then(res=>{
            if(res.message=='failed'){alert("Error")}
            else{window.location.reload()}
        })
}
const deleteFetch=(contentId:number,type:string)=>{
    console.log("contentId, type",contentId,type)
    fetch(`/community/delete${type}`,
        {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contentId
            })
        })
        .then(res => res.json())
        .then(res=>{
            if(res.message=='failed'){alert("Error")}
            else{window.location.reload()} //
        })
}
const mypageClickHandlers = {
    postClickHandler    : createClickHandler('post'),
    commentClickHandler : createClickHandler('comment')
}
mypageDomElems['post'].totalDiv.forEach(elem=>elem.addEventListener('click',mypageClickHandlers.postClickHandler))
mypageDomElems['comment'].totalDiv.forEach(elem=>elem.addEventListener('click',mypageClickHandlers.commentClickHandler))

mypageDomElems['post'].totalDiv.forEach(elem=>elem.addEventListener('click',mypageClickHandlers.postClickHandler))
mypageDomElems['comment'].totalDiv.forEach(elem=>elem.addEventListener('click',mypageClickHandlers.commentClickHandler))


let mypageDomElems = {
    'post'    : document.querySelectorAll('[data-post]') as NodeListOf<HTMLElement>,
    'comment' : document.querySelectorAll('[data-comment]') as NodeListOf<HTMLElement>,
}

*/ 
