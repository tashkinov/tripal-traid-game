const fs = require('fs');

const componentLocation = process.argv[2];
const componentName = process.argv[3];

const componentBaseTemplate = `import style from './${componentName}.module.scss';

const ${componentName} = () => {
    return (
        <div className={style.root}>
            
        </div>
    );
};

export default ${componentName};`

const componentIndexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};`

const createComponents = new Promise((resolve, reject) => {
    const path = `./src/${componentLocation}/${componentName}`;
    fs.mkdir(path, {recursive: true}, (err) => {
        if(err !== null) {
            reject(err);
        } else {
            resolve(path);
        }
    });
});

createComponents.then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.js`, componentBaseTemplate, (err) => {
        if(err !== null) {
            Promise.reject(err);
        }
    });

    return dirPath;

}).then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.module.scss`, ".root {\n\n}", (err) => {
        if(err !== null) {
            Promise.reject(err);
        }
    });

    return dirPath;

}).then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/index.js`, componentIndexTemplate, (err) => {
        if(err !== null) {
            Promise.reject(err);
        }
    });

    return dirPath;

});
