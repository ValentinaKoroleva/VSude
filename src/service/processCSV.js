import csv from "@/assets/questions.csv";
import gloss from "@/assets/glossary.csv";

export function processText(text) {
    let glossary = getGlossary()
    let allQAs = getAllQAs()
    let copyAnswer = text;
    copyAnswer = copyAnswer.replace("\n", "<br>");
    copyAnswer = copyAnswer.replace("$", "<br>");
    const exSiteStringReg = /\(http(\S+)/gi;
    let exSiteStrings = [];
    if (exSiteStringReg.test(text)) {
        exSiteStrings = text.match(exSiteStringReg);
    }
    exSiteStrings.forEach((el) => {
        let link = document.createElement("a");
        let href = el.substr(1);
        href = href.slice(0, -1);
        link.href = href;
        link.innerHTML = " Пример по ссылке. ";
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
    });

    const inSiteStringReg = /\(question_\d+\)/gi;
    let inSiteStrings = [];
    if (inSiteStringReg.test(text)) {
        inSiteStrings = text.match(inSiteStringReg);
    }
    inSiteStrings.forEach((el) => {
        let link = document.createElement("a");
        let id = el.split("_")[1];
        id = id.slice(0, -1);
        let question = allQAs.find((que) => {
            if (que.id == id) {
                return que;
            }
        }).q;
        let href = "/article/question?id=" + id;
        link.href = href;
        link.innerHTML = " См. также " + question;
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
    });

    const glossaryReg = /\(glossary_\d+\)/gi;
    let glossaryStrings = [];
    if (glossaryReg.test(text)) {
        glossaryStrings = text.match(glossaryReg);
    }
    glossaryStrings.forEach((el) => {
        let id = el.split("_")[1];
        id = id.slice(0, -1);
        let termObject = glossary.find((ob) => {
            if (ob.id == id) {
                return ob.term;
            }
        });
        let term = termObject.term;
        let link = document.createElement("a");
        let linkTerm = document.createElement("a");
        if (termObject.long != undefined) {
            let href = "/article/term?id=" + termObject.id;
            linkTerm.href = href;
            linkTerm.innerHTML = " Подробнее.";
        }
        link.setAttribute("tabindex", 0);
        link.setAttribute("id", "gloss-" + id);
        link.setAttribute("data-bs-toggle", "popover");
        link.setAttribute("data-bs-trigger", "click");
        link.title = term;
        let pop = document.createElement("div");
        pop.setAttribute("class", "popover-body");
        let popText = document.createElement("p");
        popText.innerHTML = termObject.short;
        pop.append(popText);
        pop.append(linkTerm);
        link.setAttribute("data-bs-content", pop.outerHTML);
        link.innerHTML = " (" + term + ") ";
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
    });

    return copyAnswer;
}
export function getGlossary() {
    let glossary = []
    for (let i = 0; i < gloss.length; i++) {
        let element = gloss[i];
        glossary[i] = {
            id: element.id,
            term: element.term,
            short: element.short,
            long: element.long,
        };
    }
    return glossary
}
export function getAllQAs() {
    let allQAs = []
    for (let i = 0; i < csv.length; i++) {
        let element = csv[i];
        allQAs[i] = {
            id: element.id,
            q: element.question,
            a: element.answer,
        };
    }
    return allQAs
}

// export default {processText,  getGlossary, getAllQAs}
