const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['pos', 'position'],
    ['o', 'opacity'],
    ['pt', 'padding-top'],
    ['pb', 'padding-bottom'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mt', 'margin-top'],
    ['mb', 'margin-bottom'],
    ['ml', 'margin-left'],
    ['mr', 'margin-right'],
    ['g', 'gap'],
    ['ar', 'aspect-ratio'],
    ['d', 'display'],
    ['w', 'width'],
    ['h', 'height'],
    ['maxW', 'max-width'],
    ['maxH', 'max-height'],
    ['minW', 'min-width'],
    ['minH', 'min-height'],
    ['border', 'border'],
    ['b', 'border'],
    ['bleft', 'border-left'],
    ['bright', 'border-right'],
    ['btop', 'border-top'],
    ['bbottom', 'border-bottom'],
    ['br', 'border-radius'],
    ['bg', 'background'],
    ['ta', 'text-align'],
    ['ff', 'font-family'],
    ['fs', 'font-size'],
    ['fw', 'font-weight'],
    ['td', 'text-decoration'],
    ['tr', 'transition'],
    ['fill', 'fill'],
    ['of', 'overflow'],
    ['ofx', 'overflow-x'],
    ['ofy', 'overflow-y'],
    ['flex', 'flex'],
    ['flexDirection', 'flex-direction'],
    ['flexWrap', 'flex-wrap'],
    ['flexItems', 'align-items'],
    ['flexContent', 'align-content'],
    ['flexJustifyContent', 'justify-content'],
    ['flexAlignItems', 'align-items'],
    ['gridColumns', 'grid-template-columns'],
    ['gridRows', 'grid-template-rows'],
    ['shadow', 'box-shadow'],
    ['top', 'top'],
    ['bottom', 'bottom'],
    ['left', 'left'],
    ['right', 'right'],
    ['ws', 'word-spacing'],
    ['ls', 'letter-spacing'],
    ['lb', 'line-break'],
    ['lh', 'line-height'],
    ['ts', 'text-shadow'],
    ['zIndex', 'z-index'],
    ['transformStyle', 'transform-style'],
    ['scale', 'transform', 'scale'],
    ['perspective', 'transform', 'perspective'],
    ['translateX', 'transform', 'translateX'],
    ['translateY', 'transform', 'translateY'],
    ['translate', 'transform', 'translate'],
    ['translate3d', 'transform', 'translate3d'],
    ['rotateX', 'transform', 'rotateX'],
    ['rotateY', 'transform', 'rotateY'],
    ['rotateZ', 'transform', 'rotateZ'],
    ['blur', 'filter', 'blur'],
    ['backBlur', 'backdrop-filter', 'blur'],
    ['cursor', 'cursor'],
]

const pb_getRootVariable = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue).toString()
}

const pb_putCustomFontIntoCSS = (name, url) => {
    let newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("@font-face {font-family: " + name + "; src: " + url + ";}"));
    document.head.appendChild(newStyle);
}

var pixelbite = {
    classes: class_library,
    variables: {
            primary: pb_getRootVariable('--primary-color').toString(),
            secondary: pb_getRootVariable('--secondary-color').toString(),
            danger: pb_getRootVariable('--danger-color').toString(),
            info: pb_getRootVariable('--info-color').toString(),
            warning: pb_getRootVariable('--warning-color').toString(),
            success: pb_getRootVariable('--success-color').toString(),
            fontPrimary: pb_getRootVariable('--font-family').toString(),
            fontMonospace: pb_getRootVariable('--font-mono-family').toString(),
    },
    colors: {
            white: [0, '0%'],
            gray: [0, '0%'],
            black: [0, '0%'],
            red: [0, '100%'],
            orange: [36, '100%'],
            yellow: [59, '100%'],
            green: [108, '100%'],
            teal: [154, '100%'],
            cyan: [182, '100%'],
            blue: [235, '100%'],
            purple: [275, '100%'],
            pink: [300, '100%'],
    },
    aliases: {},
    loremIpsum: [
        "Hercle, species primus!",
        "Indexs volare, tanquam emeritis nix.",
        "Festus bulla vix locuss barcas est.",
        "Domuss sunt equisos de flavum cedrium.",
        "A falsis, diatria emeritis clabulare.",
        "Medicinas sunt menss de pius nuclear vexatum iacere.",
        "Verpas sunt plasmators de brevis pes.",
        "Placidus, alter nuclear vexatum iacere.",
        "Ubi est azureus castor?",
        "Cum abnoba resistere, examinare emeritis poetaes.",
        "Ubi est bi-color lanista?",
        "Stellas prarere in ostravia!",
        "Ausus peregrinationess, tanquam talis mensa.",
        "Est teres deus, cesaris.",
        "Est dexter animalis, cesaris.",
        "Finis albus eleates est.",
        "Bassus consilium interdum captiss accentor est.",
        "Fuga noceres, tanquam castus racana.",
        "Contencio, byssus, et tata.",
        "Sunt guttuses gratia ferox, velox decores.",
        "Elogium mirabilis abactor est.",
        "Nunquam magicae mensa.",
        "Pol, a bene historia.",
        "Ubi est raptus acipenser?",
        "Mensa, ratione, et vortex.",
        "Rumors cantare!",
        "Decors volare!",
        "Fluctuss peregrinationes!",
        "Cum agripeta credere, clemens sectames.",
        "Lapsus de domesticus era, manifestum lanista!",
        "Cur clabulare ridetis?",
        "Nam quis nulla.",
        "Deuss observare, tanquam albus domus.",
        "A falsis, planeta rusticus visus.",
        "Primus seculas ducunt ad orgia.",
        "Pol, a bene guttus, magnum glos!",
        "Ortum satis ducunt ad fortis candidatus.",
        "Neuter, unus attrahendam de teres, fortis rumor.",
        "Devatios ortum!",
        "Cadunt saepe ducunt ad primus imber.",
        "Ubi est camerarius species?",
        "Vae.",
        "Genetrixs sunt adiurators de nobilis exemplar.",
        "Nullam rhoncus aliquam metus.",
        "Fusce dui leo, imperdiet in, feugiat eu, orci.",
        "Curabitur ligula vestibulum quis, facilisis vel sapien.",
        "In laoreet, magna id vel imperdiet sapien wisi sed libero.",
        "Mauris suscipit.",
        "Etiam sapien elit, consequat eget.",
        "Etiam neque.",
        "Quis autem vel eum, fugiat quo voluptas nulla pariatur?",
        "Integer in sapien.",
        "Nulla accumsan, elit diam nulla vel leo.",
        "Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.",
        "Duis condimentum augue id magna semper rutrum.",
        "Nullam lectus justo, vulputate eget mollis sed, tempor magna.",
        "Merci po poo.",
        "Fusce aliquam vestibulum ipsum.",
        "Aliquam erat volutpat.",
        "Curabitur ligula sapien, vel sapien.",
    ],
    markdowns: {
        github: [
            // { pattern: /</g, replacement: "&lt;" },
            // { pattern: />/g, replacement: "&gt;" },
            {
                pattern: /^((?: )*)((?:-|\*|\+)\s|\d+\.\s)(.*)$/gm, replacement: function (match, p1, p2, p3) {
                    let regex = / /g;
                    let matches = p1.match(regex);
                    let count = matches ? matches.length : 0;
                    let countSize = (count + 1) * 12
                    return "<li class='ml-" + countSize + "px'>" + p3 + "</li>";
                }
            },
            {pattern: /<\/li>\n<li>/g, replacement: "</li>\n$&"},
            {pattern: /^(\t*)<\/li>\n<\/ul>/gm, replacement: "$1</li>\n$1</ul>"},
            {pattern: /^(\t*)<\/li>\n<\/ol>/gm, replacement: "$1</li>\n$1</ol>"},
            {pattern: /^(\t*)<\/li>\n<\/li>/gm, replacement: "$1</li>\n$1<li>"},
            {pattern: /^(\t*)<\/ul>\n<ul>/gm, replacement: "$1</ul>\n$1<ul>"},
            {pattern: /^(\t*)<\/ol>\n<ol>/gm, replacement: "$1</ol>\n$1<ol>"},

            {pattern: /^#{6}\s+(.*)$/gm, replacement: "<h6>$1</h6>"},
            {pattern: /^#{5}\s+(.*)$/gm, replacement: "<h5>$1</h5>"},
            {pattern: /^#{4}\s+(.*)$/gm, replacement: "<h4>$1</h4>"},
            {pattern: /^#{3}\s+(.*)$/gm, replacement: "<h3>$1</h3>"},
            {pattern: /^#{2}\s+(.*)$/gm, replacement: "<h2>$1</h2>"},
            {pattern: /^#{1}\s+(.*)$/gm, replacement: "<h1>$1</h1>"},
            {
                pattern: /```([\s\S]*?)```/g, replacement: function (match, p1) {
                    p1 = p1.replace(/</g, '&lt;').replace(/>/g, '&gt;').replaceAll('*', '&#x2A;').replaceAll('_', '&#x5F;').replaceAll('[', '&#x5B;')
                    return "```" + p1 + "```";
                }
            },
            {pattern: /^!~(.*?)$/gm, replacement: "<span class='highlight'>$1</span>"},
            {pattern: /^~~(.*?)$/gm, replacement: "<span>$1</span>"},
            {pattern: /~(.*?)~/g, replacement: "<code class=\"c-info\">$1</code>"},
            {pattern: /^- \[(x| )\]\s+(.*)$/gm, replacement: "<li><input type=\"checkbox\" $1> $2</li><ul>"},
            {pattern: /!\[([^\]]+)\]\(([^\s)]+)\)/g, replacement: '<img alt="$1" src="$2">'},
            { pattern: /(\[([^\]]+)\])?\(([^)\s]+)(?:\s"([^"]+)")?\)/g, replacement: function (match, p1, p2, p3, p4) {
                    let text = p2 || p3;
                    let title = p4 ? ' title="' + p4 + '"' : '';
                    if (p1) return '<a href="' + p3 + '"' + title + '>' + text + '</a>';
                    else return '(' + text + ')'
                }
            },
            {pattern: /\*\*\*([^*]+)\*\*\*/g, replacement: '<strong><em>$1</em></strong>'},
            {pattern: /\*\*([^*]+)\*\*/g, replacement: '<strong>$1</strong>'},
            {pattern: /\*([^*]+)\*/g, replacement: '<em>$1</em>'},
            {pattern: /___([^*]+)___/g, replacement: '<strong><em>$1</em></strong>'},
            {pattern: /__([^_]+)__/g, replacement: '<strong>$1</strong>'},
            {pattern: /_([^_]+)_/g, replacement: '<em>$1</em>'},

            // {pattern: /~~(.*)~~/g, replacement: "<del>$1</del>"},
            {pattern: /^>\s+(.*)$/gm, replacement: "<blockquote>$1</blockquote>"},
            {
                pattern: /```([\w-]+)?\n([\s\S]*?)\n```/gm,
                replacement: '<pre class=\"numberedLines maxw-100% b-1px-solid-primary br-6px p-12px-16px\" $1><code>$2</code></pre>'
            },
            {
                pattern: /`([^`]+)`/gm,
                replacement: '<code class="bg-rgba(128,128,128,.15) c-white50 fw-600 fs-12px p-2px-4px br-4px">$1</code>'
            },
            {pattern: /\n---\n/gm, replacement: "<hr>"},
            {pattern: /<\/li>\n\n/gm, replacement: "</li><br>"},
            {pattern: /<\/div>\n\n/gm, replacement: "</div><br>"},
            {pattern: /<\/pre>\n\n/gm, replacement: "</pre><br>"},
            {pattern: /\n\n/gm, replacement: "<br><br>"},
        ]
    },
    cookie: {
        encription_key: 'iuISHuxHnhOlhIHQTiN9j0UuyqsuftmbyMSNn23EC#Qtxg55VPdonKA0hk4aXnEUHuf5^5G7a6s0bExoeIEDJ5DTxPBWQV0XCHyhG8eXTM@5nq79dS4B5AT2qlbQG7jx',
        salt_key: 'UnmWG3Cj78uW0zvL08eZrkbfs5l0DP1jiN53zT8ExF@@JkugtRgZjZqTCJC7XU2eU1wu0r34QqBiWLUj6e5pPeti0QOWP7oxfmX&VZJZBBCINUwjRDFMNqjxLlu06yro',
        expiration: 365,
        values: {},
    },        
    configs: [],
    scripts: [],
    styles: [],
    query: {},
    components: [],
    tags: {},
    fontawesome: 'https://kit.fontawesome.com/f474ae69e7.js',
    debug: false,
    version: '1.7-alpha'
}

let pb_debugModalID = "debug_" + pb_randomString(24)

const pb_getObjectValues = (object) => {
    return Object.entries(object)
}

const pb_setCustomComponents = (elements) => {
    if (!elements) {
        elements = document.getElementsByTagName('*')
    }
    pb_customComponentsCheck(elements)
}

const urlExists = (url) => {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true
    else
        return false
}

const pb_customComponentsCheck = (array, relativePath) => {
    let components = pb_getObjectValues(pixelbite.components)
    if (!relativePath) relativePath = ''
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.tagName.toUpperCase().includes('COMPONENT')) {
            let element_attributes = element.getAttributeNames()
            let path = ""
            if(!element.getAttribute('path')) {
                path = "error"
            } else {
                path = pb_alocatePath(element.getAttribute('path')).trim()
            }
            if (path.startsWith('http://') || path.startsWith('https://')) {
                path = element.getAttribute('path').trim()
            } else {
                path = relativePath + element.getAttribute('path').trim()
            }
            pb_includeHtmlToAnElement(element, path, element_attributes)
        }
        for (let j = 0; j < components.length; j++) {
            if (element.tagName.toUpperCase().includes(components[j][0].toLocaleUpperCase())) {
                let element_attributes = element.getAttributeNames()
                let path = pb_alocatePath(components[j][1])
                pb_includeHtmlToAnElement(element, path, element_attributes)
            }          
        }
    }
}

function pb_replaceAll(string, search, replace) {
    let searched = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // fucking bullshit
    const regex = new RegExp(searched, 'gi');
    return string.replace(regex, replace);
}

function deleteFromString(string, value) {
    return string.replaceAll(value, '')
}

const pb_customMarkdown = (text, markdown) => {
    let replacements = []
    let markdowns = pb_getObjectValues(pixelbite.markdowns)
    for (let i = 0; i < markdowns.length; i++) {
        if (markdowns[i][0] === markdown) {
            replacements = markdowns[i][1]
        }
    }
    let html = text;
    replacements.forEach(({pattern, replacement}) => {
        html = html.replace(pattern, replacement);
    });
    return html;
}

const pb_componentErrorMessage = (element, attributes, message) => {
    let toggleClass = 'toggle-' + pb_randomString(32)
    let toggleClassMore = 'toggle-' + pb_randomString(32)
    let detailsString = '';
    for (let i = 0; i < attributes.length; i++) {
        detailsString += ' - [' + attributes[i] + '="' + element.getAttribute(attributes[i]).replaceAll('<', '&lt;') + '"], <br>'
    }
    element.innerHTML =
        '<div class="' + toggleClass + ' fw-500 p-14px-20px bg-warning br-4px m-4px pr-48px d-block">' +
        '<code>' + message + '<br></code>' +
        '<code class="noselect ' + toggleClassMore + '" onclick="toggleElement(\'' + toggleClassMore + '\')">- see more details</code>' +
        '<div class="flexColumn flexLeft ' + toggleClassMore + ' hidden"><code class="noselect" onclick="toggleElement(\'' + toggleClassMore + '\')">- see less details</code><code><br>this.getAttributes():<br>' + detailsString + '</code></div>' +
        '<button class="close-x" onclick="toggleElement(\'' + toggleClass + '\')"></button>' +
        '</div>'
}

const pb_componentErrorMessageNew = (element, attributes, message) => {
    let toggleClass = 'toggle-' + pb_randomString(24)
    let detailsString = 'Attributes:<br>';
    for (let i = 0; i < attributes.length; i++) {
        detailsString += '- [' + attributes[i] + '="' + element.getAttribute(attributes[i]).replaceAll('<', '&lt;') + '"]<br>'
    }
    element.innerHTML =
        '<div class="' + toggleClass + ' shadow-0-0-20px-rgba(0,0,0,.1) fw-500 flex flexCenter flexMiddle flexColumn p-24px br-10px bg-warning pos-relative">' +
            '<i class="fs-64px o-.4 mb-12px fa-solid fa-ghost"></i>' +
            '<div class="fs-24px fw-700 o-.4 ta-center">Ooops...</div>' +
            '<div class="fs-14px fw-700 o-.4 ta-center">' + message + '</div>' +
            '<div class="ta-left ff-monospace bg-black10 p-4px-8px br-6px c-white90 mt-18px">' + detailsString + '</div>' +
            '<i class="fa-solid fa-circle-xmark pos-absolute right-12px top-12px pointer o-.8" onclick="toggleElement(\'' + toggleClass + '\')"></i>' +
        '</div>'
    // element.innerHTML =
    //     '<div class="' + toggleClass + ' shadow-0-0-20px-rgba(0,0,0,.1) fw-500 flex flexCenter flexMiddle flexColumn p-24px br-10px bg-warning pos-relative">' +
    //     '<i class="fa-solid fa-ghost fs-64px o-.4 mb-12px"></i>' +
    //     '<div class="fs-24px fw-700 o-.4 ta-center">Ooops...</div>' +
    //     '<div class="fs-14px fw-700 o-.4 ta-center">Component seems to be missing!</div>' +
    //     '<div class="ta-left ff-monospace bg-black10 p-4px-8px br-6px c-white90 mt-18px">' + detailsString + '</div>' +
    //     '<i class="fa-solid fa-circle-xmark pos-absolute right-12px top-12px pointer o-.8" onclick="toggleElement(\'' + toggleClass + '\')"></i>' +
    //     '</div>'
}

const pb_evaluateSyntax = async (string, element) => {
    const asyncReplace = async (str, regex, asyncFn) => {
        const matches = [];
        str.replace(regex, (match, ...args) => {
            matches.push(asyncFn(match, ...args));
            return match;
        });
        const results = await Promise.all(matches);
        return str.replace(regex, () => results.shift());
    };

    const regex = /<span code=["']([^"']+)["']>.*?<\/span>/g;
    
    string = await asyncReplace(string, regex, async (match, code) => {
        code = await pb_decrypt(code, pixelbite.cookie.encription_key);
        return "${`" + code + "`}";
    });

    let pb_codeEvaluationString = await asyncReplace(string, /\${`([\s\S]*?)`}/g, async (match, code) => {
        try {
            let evaluatedCode = code;
            if (code.startsWith('return ')) {
                evaluatedCode = `(() => { ${code} })()`;
            }
            const result = await new Function(`return (async () => { ${evaluatedCode} })()`)();
            if (result !== undefined) {
                return String(result);
            } else {
                return "";
            }
        } catch (error) {
            console.error("Pixelbite: " + error + "\n" + match);
            let randomError = "errorToggler-" + pb_randomString(24);
            let errorString = "<div class='" + randomError + " d-inline_block c-white bg-danger p-2px-6px br-60px fs-12px fw-400'>" + error + "<i onclick='toggleElement(\"" + randomError + "\")' class='c-rgba(0,0,0,.4) pointer ml-8px fa-solid fa-circle-xmark'></i></div>";
            return errorString;
        }
    });

    const attributes = Array.from(element.attributes);
    attributes.forEach(attribute => {
        const attributeName = attribute.name;
        const attributeValue = attribute.value;
        const regex = new RegExp(`this\\.${attributeName}`, 'g');
        pb_codeEvaluationString = pb_codeEvaluationString.replace(regex, attributeValue);
    });

    return pb_codeEvaluationString;
};

const pb_evaluateCode = async () => {
    await pb_setCustomComponents()
}

const pb_includeHtmlToAnElement = async (element, path, attributes) => {
    if (!path) path = 'null'
    path = path.replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
    let relativePathSplit = path.split('/')
    let relativePath = ''
    for (let i = 0; i < relativePathSplit.length - 1; i++) {
        relativePath += relativePathSplit[i] + '/'
    }

    let componentRequest = new XMLHttpRequest();
    componentRequest.onreadystatechange = async function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = this.response.replaceAll('\t', '  ')
                
                for (let i = 0; i < attributes.length; i++) {
                    let attribute = attributes[i]

                    if (attribute.includes(':object')) {
                        let object = ''
                        let objectName = attribute.replace(':object', '')
                        let objectPath = element.getAttribute(attribute)
                        let objectRequest = new XMLHttpRequest();
                        objectRequest.onreadystatechange = async function () {
                            if (this.readyState === 4) {
                                if (this.status === 200) {
                                    try {
                                        object = this.responseText
                                    } catch (error) {
                                        console.error('Pixelbite: Attribute "' + objectName + ':object[' + objectPath + ']" in component has syntax error.')
                                    }
                                }
                            }
                            if (this.status === 404) {
                                object = null
                            }
                        };
                        try {
                            objectRequest.open("GET", objectPath, true);
                            objectRequest.send();
                        } catch (error) {
                            console.error("help, something isn't working and i don't know what\n-" + error)
                        }
                        while (!object) {
                            await pb_sleep(10)
                        }
                        const regex = /\$\{for\(([\s\S]*?)\)\}/g;

                        // needs fix - only in if component uses :object parameter
                        const objectFors = response.match(regex);
                        if (objectFors) {
                            for (let j = 0; j < objectFors.length; j++) {
                                if (objectFors[j].includes('${for(')) {
                                    let objectForSplit = objectFors[j].substring(6, objectFors[j].length - 2).split('::')
                                    let string = ''
                                    for (let k = 0; k < eval(objectForSplit[0]); k++) {
                                        string += pb_replaceAll(objectForSplit[1], '[i]', '[' + k + ']')
                                    }
                                    response = pb_replaceAll(response, objectFors[j], string)
                                }
                            }
                        }
                        let objectStrings = response.match(/\${(.*?)}/g);
                        if (objectStrings) {
                            for (let j = 0; j < objectStrings.length; j++) {
                                if (objectStrings[j].includes(objectName)) {
                                    let objectString = objectStrings[j].replace('${', '').replace('}', '')
                                    try {
                                        let value = eval(objectString)
                                        response = pb_replaceAll(response, objectStrings[j], value)
                                    } catch (error) {
                                        response = pb_replaceAll(response, objectStrings[j], '')
                                        console.error('Pixelbite: Cannot read property from "' + objectName + '[object]" (reading "' + objectStrings[j] + '"), please check if value in the object exists.')
                                    }
                                }
                            }
                        }
                    }

                    const componentFors = response.match(/\$\{for\(([\s\S]*?)\)\}/g);
                    if (componentFors) {
                        for (let j = 0; j < componentFors.length; j++) {
                            if (componentFors[j].includes('${for(')) {
                                let objectForSplit = componentFors[j].substring(6, componentFors[j].length - 2).split('::')
                                let string = ''
                                for (let k = 0; k < eval(objectForSplit[0]); k++) {
                                    string += pb_replaceAll(objectForSplit[1], '[i]', '[' + k + ']')
                                }
                                response = pb_replaceAll(response, componentFors[j], string)
                            }
                        }
                    }

                    let attribute_syntax = '${' + attributes[i] + '}'
                    if (response.toLowerCase().includes(attribute_syntax)) {
                        // response = response.replace(attribute_syntax, element.getAttribute(attribute))
                        response = pb_replaceAll(response, attribute_syntax, element.getAttribute(attribute))
                        element.removeAttribute(attribute)
                    }

                    response = response.replace(/\${random}/g, () => pb_randomString(24));

                    let randomKeyMap = {};
                    response = response.replace(/\${random\[(.*?)\]}/g, function(match, key) {
                        if (!randomKeyMap[key]) {
                            randomKeyMap[key] = pb_randomString(24);
                        }
                        return randomKeyMap[key];
                    });

                    response = response.replace(/\${random\((\d+(\.\d+)?),(\d+(\.\d+)?)\)}/g, (match, min, _, max) => {
                        return pb_randomNumber(parseFloat(min), parseFloat(max)).toString();
                    });

                    const regex = /\${variables\.(.*?)}/g;
                    response = response.replace(regex, (match, nestedVariablePath) => {
                        const keys = nestedVariablePath.split('.');
                        let value = pixelbite.variables;

                        try {
                            for (let key of keys) {
                                if (key.includes('[')) {
                                    let [arrayName, index] = key.split(/\[|\]/).filter(Boolean);
                                    if (value.hasOwnProperty(arrayName) && Array.isArray(value[arrayName])) {
                                        value = value[arrayName][parseInt(index, 10)];
                                    } else {
                                        return match;
                                    }
                                } else {
                                    if (value.hasOwnProperty(key)) {
                                        value = value[key];
                                    } else if (key === 'length' && Array.isArray(value)) {
                                        value = value.length;
                                    } else {
                                        return match;
                                    }
                                }
                            }   
                        } catch (error) {
                            console.error('Pixelbite: ' + error)
                        }

                        if (value === undefined || value === null) {
                            return match;
                        }

                        if (typeof value === 'object') {
                            return JSON.stringify(value);
                        }

                        return value;
                    });

                    const regex2 = /\${variables\.(.*?)}/g;
                    response = response.replace(regex2, (match, nestedVariablePath) => {
                        const keys = nestedVariablePath.split('.');
                        let value = pixelbite.variables;

                        try {
                            for (let key of keys) {
                                if (key.includes('[')) {
                                    let [arrayName, index] = key.split(/\[|\]/).filter(Boolean);
                                    if (value.hasOwnProperty(arrayName) && Array.isArray(value[arrayName])) {
                                        value = value[arrayName][parseInt(index, 10)];
                                    } else {
                                        return match;
                                    }
                                } else {
                                    if (value.hasOwnProperty(key)) {
                                        value = value[key];
                                    } else if (key === 'length' && Array.isArray(value)) {
                                        value = value.length;
                                    } else {
                                        return match;
                                    }
                                }
                            }   
                        } catch (error) {
                            console.error('Pixelbite: ' + error)
                        }

                        if (value === undefined || value === null) {
                            return match;
                        }

                        if (typeof value === 'object') {
                            return JSON.stringify(value);
                        }

                        return value;
                    });

                }

                for (const [key, value] of Object.entries(pixelbite.components)) {
                    const regex = new RegExp(`<${key}(.*?)>(.*?)<\/${key}>`, 'gi');
                    response = response.replace(regex, `<component path="${value}"$1>$2</component>`);
                }

                response = await pb_evaluateSyntax(response, element)

                if (element.getAttribute('markdown')) {
                    response = pb_customMarkdown(response, element.getAttribute('markdown'))
                }
                element.innerHTML = response
                if (element.getElementsByTagName('COMPONENT')) {
                    pb_customComponentsCheck(element.getElementsByTagName('COMPONENT'), relativePath)
                }
            }
            if (this.status === 404) {
                pb_componentErrorMessageNew(element, attributes, 'Component not found<br>[path=' + path + ']')
            }
        }
        pb_classGenerator(element.getElementsByTagName('*'))
    }
    try {
        componentRequest.open("GET", path, true);
        componentRequest.send();
    } catch (error) {
        console.error("Pixelbite: " + error + "\n" + path)
    }
}

const pb_replaceVariables = (response) => {
    response = response.replace(/\${random}/g, () => pb_randomString(24));

    let randomKeyMap = {};
    response = response.replace(/\${random\[(.*?)\]}/g, function(match, key) {
        if (!randomKeyMap[key]) {
            randomKeyMap[key] = pb_randomString(24);
        }
        return randomKeyMap[key];
    });

    response = response.replace(/\${random\((\d+(\.\d+)?),(\d+(\.\d+)?)\)}/g, (match, min, _, max) => {
        return pb_randomNumber(parseFloat(min), parseFloat(max)).toString();
    });
    
    const regex = /\${variables.(.*?)}/g;              
    response = response.replace(regex, (match, nestedVariablePath) => {
        const keys = nestedVariablePath.split('.');
        let value = pixelbite.variables;
        for (let key of keys) {
            if (value.hasOwnProperty(key)) {
            value = value[key];
            } else {
            return match;
            }
        }
        return value;
        // if (pixelbite.variables.hasOwnProperty(variableName)) {
        //     return pixelbite.variables[variableName];
        // } else {
        //     return match;
        // }
    });


    const regex2 = /\${variable.(.*?)}/g;              
    response = response.replace(regex2, (match, nestedVariablePath) => {
        const keys = nestedVariablePath.split('.');
        let value = pixelbite.variables;
        for (let key of keys) {
            if (value.hasOwnProperty(key)) {
            value = value[key];
            } else {
            return match;
            }
        }
        return value;
        // if (pixelbite.variables.hasOwnProperty(variableName)) {
        //     return pixelbite.variables[variableName];
        // } else {
        //     return match;
        // }
    });
    return response
}

let darkmode = false
let thememode = null

window.addEventListener("load", async () => {
    await pb_configureConfigs(pixelbite.configs)
    await pb_queryToJson()
    if (!pb_getCookie('state')) {
        pixelbite.cookie.values = {}
        pixelbite.cookie.values["timestamp"] = Date.now()
        let encryptedCookie = await pb_encrypt(JSON.stringify(pixelbite.cookie.values), pixelbite.cookie.encription_key)
        pixelbite.cookie.state = encryptedCookie
        pb_setCookie("state", encryptedCookie, pixelbite.cookie.expiration)
    }
    pb_classGenerator()
    await pb_alocatedPath()
    await pb_checkLoremIpsum()
    let darkmodeCookie = await getCookie('darkmode')
    if (!darkmodeCookie) {
        setCookie('darkmode', '0', 365)
        darkmode = '0'
    } else {
        darkmode = darkmodeCookie
    }
    let thememodeCookie = await getCookie('theme')
    if (!thememodeCookie) {
        setCookie('theme', null)
        thememode = null 
    } else {
        thememode = "theme[" + thememodeCookie + "]:"
    }
    pb_classGenerator()
    await pb_setCustomComponents()
    pb_slideshowGenerator()
    await pb_addFontAwesome()
    await pb_sleep(0)
    pb_checkLoaders()
    await pb_scrollToID()
    await pb_scriptEval()
    await pb_styleEval()
})

const pb_styleEval = async () => {
    if (pixelbite.styles) {
        for (let i = 0; i < pixelbite.styles.length; i++) {
            if (pixelbite.styles[i].includes('.conf')) {
                let head = document.head
                let link = document.createElement("link")
                link.type = "text/css"
                link.rel = "stylesheet"
                link.href = pixelbite.styles[i]
                head.appendChild(link)
            }
        }
    }
}

const pb_scriptEval = async () => {
    if (pixelbite.scripts) {
        for (let i = 0; i < pixelbite.scripts.length; i++) {
            let script = document.createElement("script")
            script.type = "text/javascript"
            script.src = pixelbite.scripts[i]
            document.getElementsByTagName("head")[0].appendChild(script)
        }
    }
}

const pb_scrollToID = async () => {
    let str = window.location.toString()
    const lastHashIndex = str.lastIndexOf('#');
    if (lastHashIndex !== -1) {
        try {
            document.getElementById(str.substring(lastHashIndex + 1)).scrollIntoView()
        } catch (error) {
            // intended error
        }
    }
}

const pb_alocatedPath = () => {
    const a = document.getElementsByTagName('*')
    for (let i = 0; i < a.length; i++) {
        let element = a[i]
        let elementAttributeNames = element.getAttributeNames()
        for (let j = 0; j < elementAttributeNames.length; j++) {
            if(element.getAttribute(elementAttributeNames[j]).includes('@/')) {
                element.setAttribute(
                    elementAttributeNames[j],
                    element.getAttribute(elementAttributeNames[j]).replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
                )
            }
        }
    }
}

const pb_alocatePath = (string) => {
    return string.replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
}

const pb_configureConfigs = async (urls) => {
    let localUrlSplit = window.location.href.split("/")
    for (let i = 3; i < localUrlSplit.length; i++) {
        let localUrl = ""
        for (let j = 0; j < i; j++) {
            localUrl += localUrlSplit[j] + "/"
        }
        localUrl += "pixelbite.conf"
        await pb_configEval(localUrl)
    }
    // await pb_configEval(window.location.protocol + "//" + window.location.host + "/pixelbite.conf")
    // var href = window.location.href;
    // var dir = href.substring(0, href.lastIndexOf('/')) + "/";
    for (let j = 0; j < urls.length; j++) {
        await pb_configEval(urls[j])
    }
}

function pb_extractWordBeforeEquals(string) {
    const regex = /(\w+)\s*=/;
    const match = string.match(regex);
    return match ? match[1] : null;
}

function pb_removeAfterLastSlash(inputString) {
    var lastSlashIndex = inputString.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
        return inputString.substring(0, lastSlashIndex);
    } else {
        return inputString;
    }
}

const pb_findInArray = (array, match) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === match) return true
        else return false        
    }
    return false
}

const pb_escapeBracketsInsideQuotes = s => {
    return s.replace(/(["'])(.*?)\1/g, (match, quote, content) => {
        return quote + content.replace(/\[/g, '\\[').replace(/\]/g, '\\]') + quote;
    });
};

const pb_configEval = async (url) => {
    if (!url.includes('.conf')) {
        url = url + '/config.conf'
    }
    const pattern = /^(http|https|ftp):\/\//;
    if (!pattern.test(url)) {
        url = window.location.protocol + "//" + window.location.host + "/" + url
    }
    const object = {
        values: {
            components: {},
            aliases: {},
            variables: {},
            colors: {},
            markdowns: {},
            tags: {}
        }
    }

    let text = (await fetchFile(url))
    if (text) {
        const lines = text
            .replace(/theme\[/g, ' theme&lsqb;')
            .replace(/\/\/(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g, '')
            .replace(/#(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g, '')
            .replace(/\r?\n|\r/g, '')
            .replace(/\s+/g, ' ')
            .replace(/(\w+)\s*=/g, '\n$&')
            .replace(/\[\s*(\w+)\s*\]/g, '\n[$1]')
            .split('\n')
        let category = ''
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i]
            if(line.match(/\[(\w+)\]/)) {
              category = line.trim().replaceAll('[', '').replaceAll(']', '')
            } else {
                let variable = pb_extractWordBeforeEquals(line)
                let value = line.replace(/^\w+\s*=\s*/, '').trim().replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
                // let value = line.replace(/^\w+\s*=\s*/, '').trim().replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
                try {
                    if(category === "information" || category === "informations") {
                        eval('object.' + variable + ' = ' + value)
                    } else if (category === "general") {
                        if ((variable === "scripts" || variable === "styles" || variable === "configs") && value) {
                            let evalValue = eval(value)
                            for (let i = 0; i < evalValue.length; i++) {
                                if (!evalValue[i].includes('http:') && !evalValue[i].includes('https:')) {
                                    evalValue[i] = pb_removeAfterLastSlash(url) + "/" + evalValue[i]
                                }
                            }
                            value = JSON.stringify(evalValue)
                            eval('object.values.' + variable + ' = ' + value)
                            eval('pixelbite.' + variable + '.push(' + value + ')')
                        } else {
                            eval('object.values.' + variable + ' = ' + value)
                            eval('pixelbite.' + variable + ' = ' + value)
                        }
                    } else if (category === "components") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        if (!value.includes('http://') || !value.includes('https://')) {
                            // value = value.charAt(0) + window.location.protocol + "//" + window.location.host + "/" + value.slice(1)
                            value = value.charAt(0) + pb_removeAfterLastSlash(url) + "/" + value.slice(1)
                        }
                        eval('pixelbite.components.' + variable + ' = ' + value)
                    } else if (category === "aliases") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.aliases.' + variable + ' = ' + value)
                    } else if (category === "markdowns") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.markdowns.' + variable + ' = ' + value)
                    } else if (category === "variables") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.variables.' + variable + ' = ' + value)
                    } else if (category === "colors") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.colors.' + variable + ' = ' + value)
                    } else if (category === "tags") {
                        eval('object.values.' + category + '.' + variable.toUpperCase() + ' = ' + value)
                        eval('pixelbite.tags.' + variable.toUpperCase() + ' = ' + value)
                    }
                 } catch (error) {
                    console.error("Pixelbite: Config compilator fails if [text] form is used in quotes. Please use \\[text\\] instead!")
                    console.error("Pixelbite: " + error + "(" + url + ")\n" + text)
                 }
            }
        }
        if (object.hidden !== "true" && pixelbite.hidden_configs !== "true") {
            let string = 'Using '
            if (object.theme_name) string += "theme " + object.theme_name
            else string += "config theme"
            if (object.theme_version) {
                string += " "
                if (object.theme_version) string += object.theme_version
                if (object.theme_date) string += "\n- Released: " + object.theme_date
                if (object.theme_url) string += ", " + object.theme_url
            }
            if (object.author) {
                string += "\n- Author: @" + object.author
                if (object.author_url) string += ", " + object.author_url 
            }
            if(object.description) {
                string += "\n- " + object.description
            }

            let style = ""
            if (object.style) style += object.style + ";" 

            console.log(
                "%c" + string + "",
                style.replaceAll('!','&#x21;') + "font-size:12px;font-weight:bold"
            )
        }

        let configs = object.values.configs
        if (configs) {
            for (let i = 0; i < configs.length; i++) {
                pb_configEval(configs[i])                
            }
        }

        document.body.innerHTML = pb_replaceVariables(document.body.innerHTML)
        document.body.innerHTML = await pb_evaluateSyntax(document.body.innerHTML, document.body)

        if (pixelbite.debug === "true") {
            console.log(pixelbite)
            // await pb_debugWindow()
        }
    }
    // if(text) {
    //     let lines = text.split('\n')
    //     for (let i = 0; i < lines.length; i++) {
    //         if (/^\s/.test(lines[i])) {
    //             lines[i] = 'pixelbite.' + lines[i]
    //         }
    //         try {
    //             eval('pixelbite.' + lines[i].replaceAll('<', '&lt;'))
    //         } catch (error) {
    //             console.error('PixelBite: Syntax error on line ' + i + ' (reading "' + url + '")');
    //         }
    //     }
    // }
}

const pb_debugWindow = async () => {
    document.body.innerHTML += "" + 
    "<div class='foreach:" + pb_debugModalID + " pos-fixed modal p-12px g-8px zIndex-9999999 foreach:c-black bottom-12px left-50% flexCenter flexMiddle flexWrap w-655px' style='transform:translateX(-50%)'>" +
        "<button onclick=\"pb_debugModalShowWindow('general')\" class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fas fa-pen-nib'></i></button>" + 
        "<button onclick=\"pb_debugModalShowWindow('attributes')\" class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-solid fa-font'></i></button>" +
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-solid fa-align-left'></i></button>" +
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-solid fa-percent'></i></button>" +
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-solid fa-up-down-left-right'></i></button>" +
        "<button onclick=\"pb_debugRemoveElement()\" class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fas fa-trash'></i></button>" +
        "<div class='h-28px b-1px-solid-gray80'></div>" +
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fs-18px fa-solid fa-code'></i></button>" + 
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fs-18px fa-solid fa-square-root-variable'></i></button>" + 
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-solid fa-cookie-bite'></i></button>" + 
        "<div class='h-28px b-1px-solid-gray80'></div>" +
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-regular fa-copy'></i></button>" + 
        "<button class='bg-white ar-1/1 w-48px flexCenter flexMiddle bg-white b-1px-solid-gray fs-22px p-12px'><i class='fa-regular fa-floppy-disk'></i></button>" + 
    "</div>" +
    "<div id='" + pb_debugModalID + "_window' class='foreach:" + pb_debugModalID + " pos-fixed modal p-12px g-8px zIndex-9999999 foreach:c-black bottom-92px left-50% w-100vw flexColumn flexCenter flexMiddle flexWrap w-auto p-18px-16px' style='transform:translateX(-50%)'>" +
        "<div id='" + pb_debugModalID + "_general' class='flexRow flexLeft flexSpaceBetween g-12px'>" + 
            "<div class='flexColumn flexLeft w-320px'>" + 
                "<div class='fw-600 fs-18px'>General</div>" +
                "<div class='c-black40-!important fs-12px'>General information about selected element</div>" +   
            "</div>" +
            "<div class='flexColumn flexLeft w-420px g-12px'>" +
                "<div class='flexColumn flexLeft fs-14px g-8px w-100%'>" +
                    "<div>Element tag</div>" +
                    "<input placeholder='tagname' class='b-1px-solid-gray fs-12px p-6px-12px ta-left w-100% br-4px' id='" + pb_debugModalID + "_general_tagname'/>" +
                    "<div>Element classlist</div>" +
                    "<input placeholder='class-attribute class-attribute ...' class='b-1px-solid-gray fs-12px p-6px-12px ta-left w-100% br-4px' id='" + pb_debugModalID + "_general_classlist'/>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div id='" + pb_debugModalID + "_attributes' class='flexRow flexLeft flexSpaceBetween g-12px hidden'>" + 
            "<div class='flexColumn flexLeft w-320px'>" + 
                "<div class='fw-600 fs-18px'>Attributes</div>" +
                "<div class='c-black40-!important fs-12px'>Change attributes inside of an element</div>" +   
            "</div>" +
            "<div class='flexColumn flexLeft w-420px g-12px'>" +
                "<div class='flexColumn flexLeft fs-14px g-8px w-100%'>" +
                    "<div>Element attributes</div>" +
                    "<div class='flexRow g-8px w-100% " + pb_debugModalID + "_attributes_attributes_attribute'>" +
                        "<input placeholder='attribute' class='h-32px w-120px br-4px bg-black90 c-black40-!important'/>" +
                        "<input class='b-1px-solid-gray fs-12px p-6px-12px ta-left w-100% br-4px'/>" +
                        "<button class='h-32px ar-1/1 flexCenter flexMiddle p-0 " + pb_debugModalID + "_attributes_attributes_attribute_delete'><i class='c-white-!important fas fa-minus'></i></button>" +
                    "</div>" +
                    "<button class='b-1px-solid-gray fs-12px p-6px-12px ta-center c-white-!important w-100% br-4px " + pb_debugModalID + "_attributes_attributes_new'>Add new attribute</button>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "</div>" +
    ""
}

function pb_debugModalShowWindow(id) {
    document.getElementById(pb_debugModalID + "_general").classList.add('hidden')
    document.getElementById(pb_debugModalID + "_attributes").classList.add('hidden')
    document.getElementById(pb_debugModalID + "_" + id).classList.remove('hidden')
}

function pb_debugRemoveElement() {
    if (!pb_debugCursorElement.classList.contains("foreach:" + pb_debugModalID)) {
        pb_debugCursorElement.remove()
    }
}

const fetchFile = async (url) => {
    let res = ''
    if (url.includes('http:') || url.includes('https:')) {
        await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found')
              }
              return response.text()
        })
        .then(text => {
            res = text
        })
        .catch(error => {
            if (!url.includes(".conf")) {
                console.error('PixelBite: Cannot get response from "' + url + '"')
            }
        });
    
        return res
    } else {
        console.error("Pixelbite: Please make sure you are running the site on a 'localhost' or a 'server'")
    }
}

const changeTheme = async (theme) => {
    await changeThemeMode(theme)
}

const changeThemeMode = async (theme) => {
    if (theme) {
        setCookie('theme', theme, 365)
        thememode = "theme[" + theme + "]:"
    } else {
        if (darkmode === '0') {
            darkmode = '1'
            setCookie('darkmode', '1', 365)
        } else {
            darkmode = '0'
            setCookie('darkmode', '0', 365)
        }
    }
    pb_classGenerator()
}

const pb_checkLoaders = async () => {
    let loaders = document.getElementsByClassName('loader')
    if (loaders.length > 0) { 
        for (let i = 0; i < loaders.length; i++) {
            await pb_sleep(200)
            loaders[i].style.opacity = '0';
            await pb_sleep(400);
            loaders[i].style.display = 'none';
            loaders[i].remove()
        }
    }
}

const pb_checkLoremIpsum = () => {
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.forEach((element_class) => {
            let element_class_split = element_class.split('-');
            if (element_class_split[0] === "loremIpsum") {
                for (let k = 0; k < element_class_split[1]; k++) {
                    elements[i].innerHTML += pb_randomFromArray(pb_getObjectValues(pixelbite.loremIpsum))[1] + " "
                }
                elements[i].classList.remove(element_class)
            }
        })
    }
}

const pb_sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function pb_randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += pb_randomFromArray(characters);
        counter += 1;
    }
    return result;
}

function pb_randomNumber(min, max) {
    if (Number.isInteger(min) && Number.isInteger(max)) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.random() * (max - min) + min;
    }
}

function pb_randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

window.onload = () => {
    console.log(
        "%cThank you for using PixelbiteCSS :) (version " + pixelbite.version + ")",
        "font-size:18px;font-weight:bold"
    )
    console.log(
        "%cMore information can be found on our website or GitHub\nhttps://pixelbite-css.github.io, https://github.com/Pixelbite-CSS",
        "font-weight:bold"
    )
    // console.log(
    //     "%c\nWARNING! Please don't paste or copy anything from the console, unless you know what you are doing! - Somebody may want to steal your information. We highly advise you to check the source before pasting anything here!\n\n",
    //     "font-size:12px;font-weight:bold;color:black;background:red"
    // )
    pb_addSignature()
    pb_classGenerator()
}

const pb_changeRootVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

const pb_convertIfOneElement = (arr) => {
    return arr.length === 1 ? arr[0] : arr
};

const refresh = async (elements) => {
    if (!elements) { elements = document.getElementsByTagName('*') }
    if (elements) {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i]
            element.innerHTML = await pb_evaluateSyntax(element.innerHTML, element)
        }
    }
    await pb_classGenerator(elements)
}

const pb_classGenerator = async (elements) => {
    pb_alocatedPath()
    pb_checkLoremIpsum()
    if (pixelbite.variables.primary !== document.documentElement.style.getPropertyValue('--primary-color')) {
        pb_changeRootVariable('--primary-color', pixelbite.variables.primary)
    }
    if (pixelbite.variables.secondary !== document.documentElement.style.getPropertyValue('--secondary-color')) {
        pb_changeRootVariable('--secondary-color', pixelbite.variables.secondary)
    }
    if (pixelbite.variables.success !== document.documentElement.style.getPropertyValue('--success-color')) {
        pb_changeRootVariable('--success-color', pixelbite.variables.success)
    }
    if (pixelbite.variables.info !== document.documentElement.style.getPropertyValue('--info-color')) {
        pb_changeRootVariable('--info-color', pixelbite.variables.info)
    }
    if (pixelbite.variables.danger !== document.documentElement.style.getPropertyValue('--danger-color')) {
        pb_changeRootVariable('--danger-color', pixelbite.variables.danger)
    }
    if (pixelbite.variables.warning !== document.documentElement.style.getPropertyValue('--warning-color')) {
        pb_changeRootVariable('--warning-color', pixelbite.variables.warning)
    }
    if (pixelbite.variables.fontPrimary !== document.documentElement.style.getPropertyValue('--font-family')) {
        pb_changeRootVariable('--font-family', pixelbite.variables.fontPrimary)
    }
    if (pixelbite.variables.fontMonospace !== document.documentElement.style.getPropertyValue('--font-mono-family')) {
        pb_changeRootVariable('--font-mono-family', pixelbite.variables.fontMonospace)
    }
    if (!elements) {
        elements = document.getElementsByTagName('*')
    }
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        pb_tagClassReplace(element)
        pb_tagClassReplace(document.body)
        pb_aliasClassReplace(element)
        pb_aliasClassReplace(document.body)
        element.classList.forEach((element_class) => {
            for (let j = 0; j < class_library.length; j++) {
                let element_class_split = element_class.split('-');
                let splitToString = element_class_split[1] + ''
                if (splitToString.includes('_')) {
                    element_class_split[1] = splitToString.replace('_', '-')
                }
                if (darkmode === '1') {
                    if (element_class_split[0].includes('dark:')) {
                        element_class_split[0] = element_class_split[0].replace('dark:', '')
                    }
                }
                if (element === pb_cursorElement) {
                    if (element_class_split[0].includes('hover:') && !element_class_split[0].includes('dark:')) {
                        element_class_split[0] = element_class_split[0].replace('hover:', '')
                    }
                }
                if (element_class_split[0].includes('theme[')) {
                    if (element_class_split[0].includes(thememode)) {
                        element_class_split[0] = element_class_split[0].replace(thememode, '')
                    }
                }
                if (element_class_split[0].includes('foreach:')) {
                    element_class_split[0] = element_class_split[0].replace('foreach:', '')
                    let elementsOfElement = element.getElementsByTagName('*')
                    for (let k = 0; k < elementsOfElement.length; k++) {
                        elementsOfElement[k].classList.add(element_class)
                    }
                }
                if (element_class_split[0].includes('max') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('max', '').replace(':', '').replace('px', '')
                    if (size <= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }
                if (element_class_split[0].includes('min') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('min', '').replace(':', '').replace('px', '')
                    if (size >= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }

                // OLD CODE - new one was updated to be more easy and fast
                //
                // if (element_class_split[0] === class_library[j][0]) {
                //     if (class_library[j][2]) {
                //         if (element.style.cssText.includes(class_library[j][1])) {
                //             if (element.style.cssText.includes(class_library[j][2])) {
                //                 console.log(class_library[j][1] + " : " + class_library[j][2])
                //                 let target = class_library[j][2];  // e.g., "scale"
                //                 let newValue = pb_classSplitToString(element_class_split, 1);  // e.g., "800px"
                //                 let property = class_library[j][1];  // e.g., "transform"
                                
                //                 const regex = new RegExp(`(${property}:\\s*[^;]*)(;)`, 'g');
                                
                //                 // Update the element's style.cssText
                //                 element.style.cssText = element.style.cssText.replace(regex, (match, p1, p2) => {
                //                     return `${p1} ${target}(${newValue})${p2}`;
                //                 });
                //             } else {
                //                 let target = class_library[j][1]
                //                 let appendValue = class_library[j][2] + "(" + pb_classSplitToString(element_class_split, 1) + ")"
                //                 const regex = new RegExp(`(${target}:\\s*\\w+\\([^)]*\\))`)
                //                 element.style.cssText.replace(regex, `$1 ${appendValue}`)
                //             }
                //             console.log(element.style.cssText)
                //         } else {
                //             element.style.cssText += class_library[j][1] + ': ' + class_library[j][2] + '(' + pb_classSplitToString(element_class_split, 1) + ');'
                //         }
                //     } else {
                //         element.style.cssText += class_library[j][1] + ': ' + pb_classSplitToString(element_class_split, 1) + ';'
                //     }
                // } else {
                //     element.style.cssText += element_class_split[0].replaceAll('_','-') + ': ' + pb_classSplitToString(element_class_split, 1) + ';'
                // }

                if (element_class_split[0] === class_library[j][0]) {
                    if (class_library[j][2]) {
                        let target = class_library[j][2]
                        let newValue = pb_classSplitToString(element_class_split, 1)
                        let property = class_library[j][1]
                        if (element.style.cssText.includes(property)) {
                            const regex = new RegExp(`(${property}:\\s*[^;]*)(;)`, 'g')
                            element.style.cssText = element.style.cssText.replace(regex, (match, p1, p2) => {
                                const existingTransforms = p1.split(' ').filter(transform => transform.includes('('))
                                const newTransforms = existingTransforms.filter(transform => !transform.startsWith(target))
                                newTransforms.push(`${target}(${newValue})`)
                                return `${property}: ${newTransforms.join(' ')};`
                            });
                        } else {
                            element.style.cssText += `${property}: ${target}(${newValue});`;
                        }
                    } else {
                        element.style.cssText += `${class_library[j][1]}: ${pb_classSplitToString(element_class_split, 1)};`
                    }
                } else {
                    element.style.cssText += `${element_class_split[0].replaceAll('_', '-')} : ${pb_classSplitToString(element_class_split, 1)};`
                }
                
                if (element_class_split[0] === "gradient") {
                    if (!element_class_split[3]) {
                        element_class_split[3] = 0
                    }
                    let col1 = pb_variableCheck(element_class_split[1])
                    let col2 = pb_variableCheck(element_class_split[2])
                    let deg = pb_variableCheck(element_class_split[3])
                    element.style.cssText += '' +
                    'background: ' + col1 +
                    'background: -moz-linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'background: -webkit-linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'background: linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + col1 + '",endColorstr="' + col2 + '",GradientType=1);'
                }
                if (element_class_split[0] === "gradient[radial]") {
                    let colFirst = element_class_split[1]
                    let colLast = element_class_split[element_class_split.length]
                    let colAll = ''
                    for (let i = 1; i < element_class_split.length; i++) {
                        if (i === element_class_split.length - 1) {
                            colAll += element_class_split[i]
                        }
                        else if (i%2==1) {
                            colAll += element_class_split[i] + ' '
                        } else {
                            colAll += element_class_split[i] + ', '
                        }
                    }
                    element.style.cssText += '' +
                    'background: ' + colFirst +
                    'background: -moz-radial-gradient(circle, ' + colAll + ');' +
                    'background: -webkit-radial-gradient(circle, ' + colAll + ');' +
                    'background: radial-gradient(circle, ' + colAll + ');' +
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + colFirst + '",endColorstr="' + colLast + '",GradientType=1);'
                }
                if (element_class_split[0].includes("gradient[") && element_class_split[0].includes("deg]")) {
                    let deg = element_class_split[0].replace('gradient[','').replace(']','')
                    let colFirst = element_class_split[1]
                    let colLast = element_class_split[element_class_split.length]
                    let colAll = ''
                    for (let i = 1; i < element_class_split.length; i++) {
                        if (i === element_class_split.length - 1) {
                            colAll += element_class_split[i]
                        }
                        else if (i%2==1) {
                            colAll += element_class_split[i] + ' '
                        } else {
                            colAll += element_class_split[i] + ', '
                        }
                    }
                    element.style.cssText += '' +
                    'background: ' + colFirst +
                    'background: -moz-linear-gradient(' + deg + ', ' + colAll + ');' +
                    'background: -webkit-linear-gradient(' + deg + ', ' + colAll + ');' +
                    'background: linear-gradient(' + deg + ', ' + colAll + ');' +
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + colFirst + '",endColorstr="' + colLast + '",GradientType=1);'
                }
                if (element_class_split[0].includes("gradient[")) {
                    let attributes = element_class_split[0].replace('gradient[','').replace(']','').replaceAll(',', ' ')
                    let colFirst = element_class_split[1]
                    let colLast = element_class_split[element_class_split.length]
                    let colAll = ''
                    for (let i = 1; i < element_class_split.length; i++) {
                        if (i === element_class_split.length - 1) {
                            colAll += element_class_split[i]
                        }
                        else if (i%2==1) {
                            colAll += element_class_split[i] + ' '
                        } else {
                            colAll += element_class_split[i] + ', '
                        }
                    }
                    element.style.cssText += '' +
                    'background: ' + colFirst +
                    'background: -moz-radial-gradient(' + attributes + ', ' + colAll + ');' +
                    'background: -webkit-radial-gradient(' + attributes + ', ' + colAll + ');' +
                    'background: radial-gradient(at ' + attributes + ', ' + colAll + ');' +
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + colFirst + '",endColorstr="' + colLast + '",GradientType=1);'
                }
            }
        })
        pb_updateSearchbars()
        pb_updateDropdowns()
        pb_hrefAnyElement()
        pb_generateFloatInput(element)
    }
}

const pb_tagClassReplace = (element) => {
    let tagname = element.tagName
    
    let tagnamePixelbite = pb_getObjectValues(pixelbite.tags)
    for (let i = 0; i < tagnamePixelbite.length; i++) {
        if (tagnamePixelbite[i][0] === tagname || tagnamePixelbite[i][0] === "_ALL") {
            let classSplit = tagnamePixelbite[i][1].split(' ')
            for (let j = 0; j < classSplit.length; j++) {
                let classOne = classSplit[j].replaceAll('theme&lsqb;', 'theme[')
                if (classOne) {
                    element.classList.add(classOne)
                }
            }
        }
    }
}

const pb_hrefAnyElement = () => {
    let elements = document.body.getElementsByTagName("*")
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.getAttribute("href")) {
            let hrefAttribute = element.getAttribute("href")
            let targetAttribute = element.getAttribute("target")
            if(hrefAttribute && targetAttribute) {
                element.setAttribute("onclick", "href('" + hrefAttribute + "', '" + targetAttribute + "')")
            } else if (hrefAttribute) {
                element.setAttribute("onclick", "href('" + hrefAttribute + "')")
            }
        }
    }
}

const pb_generateFloatInput = (element) => {
    if (element.classList.contains("floatInput")) {
        if (element.getElementsByClassName('input') && element.getElementsByClassName('label')) {
            if (element.getElementsByClassName('input') && element.getElementsByTagName('label')) {
                let inputs = element.getElementsByTagName('input')
                let input = inputs[0]
                let labels = element.getElementsByTagName('label')
                let label = labels[0]
                if (input.value) label.classList.add('inputhastext')
                else if (label.classList.contains('inputhastext')) label.classList.remove('inputhastext')
            }
        }
    }
}

const pb_aliasClassReplace = (element) => {
    let x = element.classList
    for (let i = 0; i < x.length; i++) {
        let aliasClasses = pb_getObjectValues(pixelbite.aliases)
        for (let j = 0; j < aliasClasses.length; j++) {
            if (aliasClasses[j][0] === x[i]) {
                let classSplit = aliasClasses[j][1].split(' ')
                for (let k = 0; k < classSplit.length; k++) {
                    let classOne = classSplit[k].replaceAll('theme&lsqb;', 'theme[')
                    if (classOne) {
                        element.classList.add(classOne)
                    }
                }
            }
        }
    }
}

const pb_classSplitToString = (array, startPosition) => {
    if (array) {
        let variables = pb_getObjectValues(pixelbite.variables)
        let color_library_hsl = pb_getObjectValues(pixelbite.colors)
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < variables.length; j++) {
                if (typeof variables[j][1] !== 'object') {
                    if (variables[j][1].includes('url(')) {
                        let fontName = 'font-' + pb_randomString(32)
                        let varia = pixelbite.variables
                        pb_putCustomFontIntoCSS(fontName, variables[j][1])
                        varia[variables[j][0]] = fontName
                    }
                    if (array[i] === variables[j][0]) {
                        array[i] = variables[j][1]
                    }
                }
            }
            for (let j = 0; j < color_library_hsl.length; j++) {
                if (color_library_hsl[j][1].includes('#')) {
                    let hsl = pb_colorConverter(color_library_hsl[j][1])
                    color_library_hsl[j][1] = [hsl[0] * 360 + '', hsl[1] * 100 + '%']
                }
                if (array[i].includes(color_library_hsl[j][0])) {
                    let lightness = array[i].replace(color_library_hsl[j][0], "")
                    if (!lightness) lightness = 50
                    if (pb_isNumeric(lightness)) {
                        array[i] = "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + "," + lightness + '%)'
                    }
                }
                // if (array[i].includes(color_library_hsl[j][0])) {
                //     let lightness = array[i].replace(color_library_hsl[j][0], "")
                //     if (!lightness) lightness
                //     if (pb_isNumeric(lightness))
                //     array[i] = array[i].replace(color_library_hsl[j][0], "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + ",")
                //     array[i] += "%)"
                // }
            }
            a += array[i] + " "
        }
        return a
    } else return ""
}

const pb_variableCheck = (string) => {
    let variables = pb_getObjectValues(pixelbite.variables)
        let color_library_hsl = pb_getObjectValues(pixelbite.colors)
        for (let j = 0; j < variables.length; j++) {
            if (typeof variables[j][1] !== 'object') {
                if (variables[j][1].includes('url(')) {
                    let fontName = 'font-' + pb_randomString(32)
                    let varia = pixelbite.variables
                    pb_putCustomFontIntoCSS(fontName, variables[j][1])
                    varia[variables[j][0]] = fontName
                }
                if (string === variables[j][0]) {
                    string = variables[j][1]
                }
            }
        }
        for (let j = 0; j < color_library_hsl.length; j++) {
            if (color_library_hsl[j][1].includes('#')) {
                let hsl = pb_colorConverter(color_library_hsl[j][1])
                color_library_hsl[j][1] = [hsl[0] * 360 + '', hsl[1] * 100 + '%']
            }
            if (string.includes(color_library_hsl[j][0])) {
                let lightness = string.replace(color_library_hsl[j][0], "")
                if (!lightness) lightness = 50
                if (pb_isNumeric(lightness)) {
                    string = "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + "," + lightness + '%)'
                }
            }
        }
        return string
}

const pb_isNumeric = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

const pb_colorConverter = (color) => {
    let r = parseInt(color.substr(1, 2), 16); // Grab the hex representation of red (chars 1-2) and convert to decimal (base 10).
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

const pb_addSignature = () => {
    const comment = document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");
    document.body.appendChild(comment);
}

const pb_addFontAwesome = () => {
    const script = document.createElement('script')
    script.setAttribute('src', pixelbite.fontawesome)
    script.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(script)
}

const href = (location, target) => {
    if (!target) target = '_self'
    window.open(location, target)
}

const toggleElement = (element_class) => {
    const elements = document.getElementsByClassName(element_class)
    for (let i = 0; i < elements.length; i++) {
        // if (elements[i].classList.contains('hidden')) {
        //     elements[i].style.position = 'absolute'
        //     elements[i].classList.remove('hidden')
        // }
        // if (elements[i].style.position !== 'absolute') {
        //     elements[i].style.position = 'absolute'
        //     elements[i].style.top = '-999999999px'
        // } else {
        //     elements[i].style.position = 'relative'
        //     elements[i].style.top = '0px'
        // }
        if (elements[i].classList.contains('hidden')) {
            elements[i].style.display = 'none'
            elements[i].classList.remove('hidden')
        }
        if (elements[i].style.display !== 'none') {
            elements[i].style.display = 'none'
        } else {
            elements[i].style.display = 'flex'
        }
    }
}

const pb_changeVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

let pb_beforeSlideshows = []

const pb_slideshowGenerator = async () => {
    let slideshows = document.getElementsByClassName('slideshow')
    if (slideshows !== pb_beforeSlideshows) {
        if (slideshows.length > 0) {
            for (let i = 0; i < slideshows.length; i++) {
                if (!pb_beforeSlideshows.includes(slideshows[i])) {
                    let slideshow = slideshows[i]
                    let slides = slideshow.getElementsByClassName('slide')
                    pb_slideshowSlide(0, slideshow, slides)
                }
            }
            pb_beforeSlideshows = slideshows
        }
    }
    await pb_sleep(1000)
    await pb_slideshowGenerator()
}

const pb_slideshowSlide = async (index, slideshow, slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = ((-i + index) * 100) + "%"
    }
    if (index >= slides.length - 1) index = -1
    await pb_sleep(5000)
    await pb_slideshowSlide(index + 1, slideshow, slides)
}

const pb_setCookie = (name, value, days_to_expiration) => {
    const d = new Date()
    d.setTime(d.getTime() + (days_to_expiration * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax"
}

const pb_getCookie = (name) => {
    let n = name + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(n) === 0) return c.substring(n.length, c.length)
    }
    return ""
}

const pb_cookieObject_loadCookieValues = async () => {
    let decriptedCookie = await pb_decrypt(pb_getCookie("state"), pixelbite.cookie.encription_key)
    pb_setCookie("state", pb_getCookie("state"), pixelbite.cookie.expiration)
    pixelbite.cookie.values = decriptedCookie
}

const pb_cookieObject_addAttribute = async (key, value) => {
    pixelbite.cookie.values[key] = value;
    pixelbite.cookie.values["timestamp"] = Date.now()
    let encryptedCookie = await pb_encrypt(JSON.stringify(pixelbite.cookie.values), pixelbite.cookie.encription_key)
    pixelbite.cookie.state = encryptedCookie
    pb_setCookie("state", encryptedCookie, pixelbite.cookie.expiration)
}

const pb_cookieObject_deleteAttribute = async (key) => {
    delete pixelbite.cookie.values[key];
    let encryptedCookie = await pb_encrypt(JSON.stringify(pixelbite.cookie.values), pixelbite.cookie.encription_key)
    pixelbite.cookie.state = encryptedCookie
    pb_setCookie("state", encryptedCookie, pixelbite.cookie.expiration)
}

const pb_cookieObject_getAttribute = async (key) => {
    try {
        let cookieValueCripted = await pb_getCookie('state')
        let decriptedCookie = await pb_decrypt(cookieValueCripted, pixelbite.cookie.encription_key)
        pb_setCookie("state", cookieValueCripted, pixelbite.cookie.expiration)
        try {
            eval("pixelbite.cookie.values = " + decriptedCookie)
        } catch (error) {
            console.error("Pixelbite: Cookies failed to load - creating new cookies")
            document.cookie.split(';').forEach(cookie => {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            });
        }
        return pixelbite.cookie.values[key]   
    } catch (error) {
        console.error('Pixelbite: Reloading page')
        location.reload()
    }
}

const getHook = async (key) => {
    let decript_value = await pb_cookieObject_getAttribute("hook_" + key)
    return await pb_decrypt(decript_value, pixelbite.cookie.encription_key)
}

const setHook = async (key, value) => {
    let encript_value = await pb_encrypt(value, pixelbite.cookie.encription_key)
    pb_cookieObject_addAttribute("hook_" + key, encript_value)
}

const deleteHook = (key) => {
    pb_cookieObject_deleteAttribute("hook_" + key)
}

const getCookie = async (key) => {
    return await pb_cookieObject_getAttribute(key)
}

const setCookie = async (key, value) => {
    pb_cookieObject_addAttribute(key, value)
}

const deleteCookie = (key) => {
    pb_cookieObject_deleteAttribute(key)
}

const pb_stringToArrayBuffer = async (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str).buffer;
};

const pb_arrayBufferToString = async (buffer) => {
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
};

const pb_generateKey = async (password) => {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: await pb_stringToArrayBuffer(pixelbite.cookie.salt_key),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
};

const pb_encrypt = async (value, password) => {
  const key = await pb_generateKey(password + "+" + navigator.userAgent);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encodedValue = await pb_stringToArrayBuffer(value);

  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    key,
    encodedValue
  );

  const encryptedArray = new Uint8Array(encryptedBuffer);
  const combined = new Uint8Array([...iv, ...encryptedArray]);
  const encryptedBase64 = btoa(String.fromCharCode(...combined));

  return encryptedBase64;
};

// Function to decrypt a value with a password
const pb_decrypt = async (encryptedValue, password) => {
    try {
        const key = await pb_generateKey(password + "+" + navigator.userAgent);
        const encryptedData = atob(encryptedValue);
        const combined = new Uint8Array([...encryptedData].map(c => c.charCodeAt(0)));
        const iv = combined.slice(0, 12);
        const encryptedBuffer = combined.slice(12);
      
        const decryptedBuffer = await crypto.subtle.decrypt(
          {
            name: 'AES-GCM',
            iv: iv
          },
          key,
          encryptedBuffer
        );
      
        return await pb_arrayBufferToString(decryptedBuffer);
    } catch (error) {
        console.error("Pixelbite: Cookies decription failed - encription key was changed");
        deleteCookie()
        // location.reload()
        return ""
    }
};

let pb_searchbarsBefore = []

const pb_updateSearchbars = () => {
    if (pb_searchbarsBefore.length !== document.getElementsByClassName('searchbar').length) {
        let searchbars = document.getElementsByClassName('searchbar')
        for (let i = 0; i < searchbars.length; i++) {
            let search = searchbars[i].getElementsByClassName('search')[0]
            let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
            for (let j = 0; j < searchValues.length; j++) {
                searchValues[j].style.display = 'none'

            }
            search.oninput = () => {
                let searchValue = search.value.toLowerCase();
                let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
                for (let j = 0; j < searchValues.length; j++) {
                    if (searchValues[j].innerText.toLowerCase().includes(searchValue) && searchValue) {
                        searchValues[j].style.display = 'flex'
                    } else {
                        searchValues[j].style.display = 'none'
                    }
                }
            }
        }
        pb_searchbarsBefore = searchbars
    }
}

let pb_dropdownsBefore = []

// const pb_updateDropdowns = () => {
//     let dropdowns = document.getElementsByClassName("dropdown");
//     if(pb_dropdownsBefore.length !== dropdowns.length) {
//         for (let i = 0; i < dropdowns.length; i++) {
//             let divs = document.getElementsByTagName('div')
//             let buttons = document.getElementsByTagName('button')
//             for(let j = 0; j < divs.length; j++) {
//                 divs[j].remove
//             }
//             for(let j = 0; j < buttons.length; j++) {
//                 buttons[j].remove
//             }
//             let selects = dropdowns[i].getElementsByTagName('select')
//             for(let j = 0; j < selects.length; j++) {
//                 selects[j].style.display = "none";
//             }
//             let options = dropdowns[i].getElementsByTagName('select')[0].getElementsByTagName('option')
//             let selectButton = document.createElement("button")
//             let dropdownClassname = "toggle-" + pb_randomString(32)
//             selectButton.onclick = () => toggleElement(dropdownClassname)
//             selectButton.innerHTML = "<div class='flexRow flexSpaceBetween g-15px w-100%'><div>" + options[0].innerHTML + "</div><i class='fa-solid fa-caret-down'></i></div>"
//             dropdowns[i].append(selectButton)
//             dropdowns[i].value = options[0].value;
//             let selectMenu = document.createElement("div")
//             selectMenu.classList.add("hidden")
//             selectMenu.classList.add(dropdownClassname)
//             for(let k = 0; k < options.length; k++) {
//                 let option = document.createElement("div")
//                 option.value = options[k].value
//                 option.innerHTML = options[k].innerHTML
//                 option.onclick = () => {
//                     dropdowns[i].value = options[k].value
//                     dropdowns[i].getElementsByTagName('button')[0].innerHTML = "<div class='flexRow flexSpaceBetween g-15px w-100%'><div>" + options[k].innerHTML + "</div><i class='fa-solid fa-caret-down'></i></div>"
//                     pb_classGenerator()
//                     toggleElement(dropdownClassname)
//                 }
//                 selectMenu.append(option)
//             }
//             dropdowns[i].append(selectMenu)
//         }
//         pb_dropdownsBefore = dropdowns
//     }
// }

const pb_updateDropdowns = () => {
    let dropdowns = document.getElementsByClassName("dropdown");
    if(pb_dropdownsBefore.length !== dropdowns.length) {
        for (let i = 0; i < dropdowns.length; i++) {
            dropdownButton = dropdowns[i].getElementsByClassName('dropdown-button')[0]
            dropdownContent = dropdowns[i].getElementsByClassName('dropdown-content')[0]
            dropdownX = dropdowns[i].getElementsByClassName('dropdown-x')
            dropdowns[i].classList.add("pos-relative")
            if(dropdownButton && dropdownContent) {
                let dropdownId = "dropdownElement-" + pb_randomString(24)
                dropdownButton.classList.add("pos-relative")
                dropdownContent.classList.add("pos-absolute")
                dropdownContent.classList.add("top-100%")
                dropdownContent.classList.add("maxW-none")
                dropdownContent.classList.add(dropdownId)
                dropdownButton.onclick = () => {    
                    toggleElement(dropdownId)
                }
                if(dropdownX) {
                    for (let j = 0; j < dropdownX.length; j++) {                                
                        dropdownX[j].onclick = () => {toggleElement(dropdownId)}   
                    }
                }
            }
        }
        pb_dropdownsBefore = dropdowns
    }
}

const pb_queryToJson = () => {
    if(window.location.search) {
        const pairs = window.location.search.slice(1).split('&')
        const result = {}
    
        pairs.forEach(pair => {
            const [key, value] = pair.split('=')
            result[key] = value !== undefined ? decodeURIComponent(value) : true;
        });
        pixelbite.query = result
    }
};

window.addEventListener('popstate', function (event) {
    pb_queryToJson()
    refresh()
});


// VERY FUCKED UP IN DEED

let pb_cursorElement = ''
let pb_cursorElementPrevieous = ''
let pb_cursorElementLatch = false

const pb_getParentElementThatHasHover = async (element) => {
    let currentElement = element;

    while (currentElement && currentElement.tagName !== 'BODY') {
        if (currentElement.className && currentElement.className.includes('hover:')) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }

    return element;
}

document.addEventListener('mousemove', async e => {
    try {
        pb_cursorElement = await pb_getParentElementThatHasHover(document.elementFromPoint(e.clientX, e.clientY))
        if (pb_cursorElement.classList !== pb_cursorElementPrevieous.classList) {
            if (pb_cursorElementLatch) {
                pb_classGenerator([pb_cursorElementPrevieous])
                pb_classGenerator([pb_cursorElement])
                pb_cursorElementLatch = false
                pb_cursorElementPrevieous = pb_cursorElement
            }
        }
        let element_classes = pb_cursorElement.classList
        for (let i = 0; i < element_classes.length; i++) {
            if(element_classes[i].includes('hover:')) {
                if (pb_cursorElement.classList !== pb_cursorElementPrevieous.classList) {
                    pb_classGenerator([pb_cursorElement]);
                }
                pb_cursorElementPrevieous = pb_cursorElement
                pb_cursorElementLatch = true
            }
        }
    } catch (error) {
        console.log(error)
        // nothing to worry about
        // UPDATE: there is something to worry about
        // - the hover: doesn't work with inner elements
        // - TODO: fix it
        // UPDATE: TODO: fix failed, the function cannot select the right element since the element isn't the same
        // TODO: fix it
    }
}, {passive: true})

document.addEventListener('wheel', e => {
    try {
        pb_cursorElement = document.elementFromPoint(e.clientX, e.clientY)
        if (pb_cursorElement.classList !== pb_cursorElementPrevieous.classList) {
            if (pb_cursorElementLatch) {
                pb_classGenerator([pb_cursorElementPrevieous])
                pb_classGenerator([pb_cursorElement])
                pb_cursorElementLatch = false
                pb_cursorElementPrevieous = pb_cursorElement
            }
        }
        let element_classes = pb_cursorElement.classList
        for (let i = 0; i < element_classes.length; i++) {
            if(element_classes[i].includes('hover:')) {
                if (pb_cursorElement.classList !== pb_cursorElementPrevieous.classList) {
                    pb_classGenerator([pb_cursorElement]);
                }
                pb_cursorElementPrevieous = pb_cursorElement
                pb_cursorElementLatch = true
            }
        }
    } catch (error) {
        // nothing to worry about
    }
}, {passive: true})

let pb_debugCursorElement = ''
document.addEventListener('click', e => {
    if (pixelbite.debug === "true") {
        try {
            pb_debugCursorElement = document.elementFromPoint(e.clientX, e.clientY)
            if (!pb_debugCursorElement.classList.contains("foreach:" + pb_debugModalID)) {
                if (pb_debugCursorElement.tagName.trim().toUpperCase().toString() !== "HTML") {
                    let debugsSelectionsToDelete = document.getElementsByClassName('debugSelection')
                    if (debugsSelectionsToDelete) {
                        for (let i = 0; i < debugsSelectionsToDelete.length; i++) {
                            debugsSelectionsToDelete[i].classList.remove('debugSelection')            
                        }
                    }
                    pb_debugCursorElement.classList.add('debugSelection')
                }
            }
            if (pb_debugCursorElement.tagName.trim().toUpperCase().toString() === "HTML") {
                pb_debugCursorElement = ''
            }

        } catch (error) {
            // don't worry
            // be happy
        }
    }
})

window.addEventListener('resize', () => {pb_classGenerator()});
