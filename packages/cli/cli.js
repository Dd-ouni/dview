import commonLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  (async () => await readFile(new URL('./package.json', import.meta.url)))()
);

// 配置命令参数
const optionDefinitions = [{ name: 'version', alias: 'v', type: Boolean }];
const options = commonLineArgs(optionDefinitions);
if (options.version) {
  console.log(`v${pkg.version}`);
}

//帮助命令
const helpSections = [
  {
    header: 'create-ddview',
    content: '二次开发业务库'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];

if (options.help) {
  console.log(123);
  console.log(commandLineUsage(helpSections));
}
