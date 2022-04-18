import { createDiv, createListItem, createSpan, createUnorderedList, getElements } from 'zenkai'

const sources = [
    {
        "name": "agner2017survey",
        "authors": [
            { "firstName": "Luciane Telinski Wiedermann", "lastName": "Agner" },
            { "firstName": "Timothy Christian", "lastName": "Lethbridge" }
        ],
        "booktitle": "Model Driven Engineering Languages and Systems",
        "title": "A survey of tool use in modeling education",
        "year": 2017,
        "organization": "IEEE",
        "pages": "303--311",
        "type": "inproceedings"
    },
    {
        "name": "kelly2008domain",
        "type": "book",
        "title": "Domain-specific modeling: enabling full code generation",
        "authors": [
            { "firstName": "Steven", "lastName": "Kelly" },
            { "firstName": "Juha-Pekka", "lastName": "Tolvanen" }
        ],
        "year": 2008,
        "publisher": "John Wiley & Sons"
    },
    {
        "name": "forward2008problems",
        "type": "inproceedings",
        "title": "Problems and opportunities for model-centric versus code-centric software development: a survey of software professionals",
        "authors": [
            { "firstName": "Andrew", "lastName": "Forward" },
            { "firstName": "Timothy C", "lastName": "Lethbridge" }
        ],
        "booktitle": "Proceedings of the 2008 international workshop on Models in software engineering",
        "pages": "27--32",
        "year": 2008
    },
    {
        "name": "mealy2007improving",
        "type": "inproceedings",
        "title": "Improving usability of software refactoring tools",
        "authors": [
            { "firstName": "Erica", "lastName": "Mealy" },
            { "firstName": "David", "lastName": "Carrington" },
            { "firstName": "Paul", "lastName": "Strooper" },
            { "firstName": "Peta", "lastName": "Wyeth" }
        ],
        "booktitle": "2007 Australian Software Engineering Conference (ASWEC'07)",
        "pages": "307--318",
        "year": 2007,
        "organization": "IEEE"
    },
    {
        "name": "abrahao2017user",
        "type": "inproceedings",
        "title": "User experience for model-driven engineering: Challenges and future directions",
        "authors": [
            { "firstName": "Silvia", "lastName": "Abrahão" },
            { "firstName": "Francis", "lastName": "Bourdeleau" },
            { "firstName": "Betty", "lastName": "Cheng" },
            { "firstName": "Sahar", "lastName": "Kokaly" },
            { "firstName": "Richard", "lastName": "Paige" },
            { "firstName": "Harald", "lastName": "Stöerrle" },
            { "firstName": "Jon", "lastName": "Whittle" }
        ],
        "booktitle": "2017 ACM/IEEE 20th International Conference on Model Driven Engineering Languages and Systems (MODELS)",
        "pages": "229--236",
        "year": 2017,
        "organization": "IEEE"
    },
    {
        "name": "voelter2014towards",
        "type": "inproceedings",
        "authors": [
            { "firstName": "Markus", "lastName": "Völter" },
            { "firstName": "Janet", "lastName": "Siegmund" },
            { "firstName": "Thorsten", "lastName": "Berger" },
            { "firstName": "Bernd", "lastName": "Kolb" }
        ],
        "booktitle": "International Conference on Software Language Engineering",
        "title": "Towards user-friendly projectional editors",
        "year": 2014,
        "pages": "41--61",
        "publisher": "Springer",
        "series": "LNCS",
        "volume": 8706
    }
]

let docRefs = getElements("[data-ref]");
docRefs.forEach(docref => {
    const { ref } = docref.CDATA_SECTION_NODE;

    let container = createDiv({
        class: ["ref"]
    });
    let references = ref.split(",");
    let reflist = createUnorderedList({
        class: ["bare-list", "ref-previews"]
    });
    references.forEach(ref => {
        let source = sources.find(src => src.name === ref);
        let item = createListItem({
            class: ["ref-preview"]
        });
        let type = createSpan({
            class: ["ref-type"]
        }, source.type);
        let name = createSpan({
            class: ["ref-title"]
        }, source.name);

        let authors = createAuthors(source.authors);
        item.append(type, name, authors);

        reflist.append(item);
    })
})

function createAuthors(list) {
    let reflist = createUnorderedList({
        class: ["bare-list", "ref-previews"]
    });

    list.forEach(item => {
        let item = createListItem({
            class: ["ref-preview"]
        }, `${item.lastName}, ${item.firstName}`);

        reflist.append(item)
    })

    return reflist;
}