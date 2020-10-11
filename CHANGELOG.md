Changelog

# [1.0.0](https://github.com/Colonise/Config/compare/...v1.0.0) (2020-10-11)


### Bug Fixes

* **eslint:** @typescript-eslint/init-declarations ([97c9aee](https://github.com/Colonise/Config/commit/97c9aeec0f4485a205b6f00620223de031a0bc75))
* **eslint:** @typescript-eslint/keyword-spacing for ([adcae98](https://github.com/Colonise/Config/commit/adcae98be61c5a2623142651fa3b584da0be131e))
* accidentally copy wrong files on distribute ([85e6cc6](https://github.com/Colonise/Config/commit/85e6cc64e637249e6c14e0cf510015f5e06ef724))
* **eslint:** add .eslintignore to default ([1860cc6](https://github.com/Colonise/Config/commit/1860cc6b38c4fd000d7569b16b65e92f05e5e0b3))
* **GithubActions:** add .github folder to defaults ([863e583](https://github.com/Colonise/Config/commit/863e583708090d9605c5cee72f9a5a71917abdb0))
* **tsconfig:** add include to defaults ([f3391a1](https://github.com/Colonise/Config/commit/f3391a1b7f8f8a6dcdd041425daa68d89b2529be))
* add issue templates to default ([4ff3dc4](https://github.com/Colonise/Config/commit/4ff3dc420d9af661334a9ae7fafb1b307f20efa7))
* **install:** add middle-man installation script ([ad55832](https://github.com/Colonise/Config/commit/ad55832ddf189664804c11797f1b45b589896757))
* **install:** add postinstall script to distribute ([c828834](https://github.com/Colonise/Config/commit/c828834a16c7e34d208492eb38e4b12c6ae87955))
* **travis-ci:** add quotes around openssl key and iv ([058f249](https://github.com/Colonise/Config/commit/058f249f684b74e8ab6d23211e4d8d57c102683a))
* **install:** allow automatically ignored files in publish ([49674e5](https://github.com/Colonise/Config/commit/49674e50f9927978b07b65a96664af830fcdaf33))
* **travis-ci:** attempt to fix openssl decrypt command ([0e71018](https://github.com/Colonise/Config/commit/0e71018a76a43b86110de0c25d2f9c5c7b432c98))
* build from /generated instead of /source ([7aba204](https://github.com/Colonise/Config/commit/7aba204346a70068a215a8f90bcec9e1e257fdad))
* **github-actions:** build on multiple node versions ([ea5fc5c](https://github.com/Colonise/Config/commit/ea5fc5cd3f33baa82fbb20834c508964e62c9389))
* **gulp:** change build file locations to './src' ([b279107](https://github.com/Colonise/Config/commit/b279107df319f11319a59bce449ac355f5a92c3f))
* **gulpfile:** change fs.promise use to fs sync ([3e13c87](https://github.com/Colonise/Config/commit/3e13c87af4349eb4db6e608ada24083af1f7e8eb))
* **build:** change gpg git commiter ([4b41224](https://github.com/Colonise/Config/commit/4b4122494d51fe4cf3669d2428e4fe1b9a410465))
* **travis-ci:** change gpg passphrase flag ([b1cd011](https://github.com/Colonise/Config/commit/b1cd011ff21edf567db2bd69730e913c97154a36))
* **travis-ci:** change install script to 'npm ci' ([c13978c](https://github.com/Colonise/Config/commit/c13978cf44d201d1b85cd81c7e22559fd2b30b5d))
* change prod prefix to 'deps' ([6a0201a](https://github.com/Colonise/Config/commit/6a0201a7c4a2f3c12834a61a7ad8cd98a596bacd))
* change travis install command to npm ci ([bb5e446](https://github.com/Colonise/Config/commit/bb5e446b7f5da213b8a8c67a8af469f5634c1668))
* **install:** COLONISE_PACKAGE to COLONISE_PACKAGE_NAME ([860266a](https://github.com/Colonise/Config/commit/860266a7d13b2e7ebbc501542ccd3ba748ad3f4a))
* comment out git commit for gpg action ([772835f](https://github.com/Colonise/Config/commit/772835f503601a75fa30a742a67d23e60a3a18f7))
* **gulpfile:** convert paths to absolutes ([7ca3091](https://github.com/Colonise/Config/commit/7ca3091a2459d12938fc61bd4afdf668e39785f2))
* **release:** copy .d.ts files to build directory ([6f51d06](https://github.com/Colonise/Config/commit/6f51d06c858100f69c29d53d28a18cfc72da5734))
* copy modified package.json ([b06911e](https://github.com/Colonise/Config/commit/b06911efcd13cb04448e77c96047fd427c244a31))
* **gulpfile:** copy modified package.json to root ([f4d1518](https://github.com/Colonise/Config/commit/f4d15189cf872e79ea21e9d1b358b7c940e48118))
* copy travis-ci config to default folder ([fee4ded](https://github.com/Colonise/Config/commit/fee4dedc74d09068649e9a9dd2d82fe9473f7094))
* **install:** default files disappearing ([ff98fed](https://github.com/Colonise/Config/commit/ff98fed32b2dc60cb6825eddacf26e235a472162))
* delete gpg from default folder ([c1b4af9](https://github.com/Colonise/Config/commit/c1b4af91253ded7acd72bf1cf400a22e537b1eef))
* **gulpfile:** distribute not completing ([b341efc](https://github.com/Colonise/Config/commit/b341efc8e8995a7b05a3817912660379db707cfe))
* **install:** do not rename published default files ([f690ab9](https://github.com/Colonise/Config/commit/f690ab9187ec5e72509f427e42cc9e1a8886aaef))
* **semantic-release:** enforce gpg2 ([98b6f1e](https://github.com/Colonise/Config/commit/98b6f1e6b8c96cc4e33d87ec167666c625a74c22))
* **install:** ensure all default files are published ([9fe575b](https://github.com/Colonise/Config/commit/9fe575bb610ad5ab2c719542f52143875bf87e85))
* **install:** ensure directories default exist ([8b15c28](https://github.com/Colonise/Config/commit/8b15c28177f96562f3564b9cfe20341a2514e8bc))
* **travis-ci:** fix failing GPG Passphrase ([e136adb](https://github.com/Colonise/Config/commit/e136adbbcf618b34635aefda0f95b1607e1b8335))
* **README:** fix new travis-ci.com link ([46a2509](https://github.com/Colonise/Config/commit/46a250954f3f9db97f5b1c66c9eae4ae7fcf3555))
* **build:** generate a tsconfig file with files ([155015e](https://github.com/Colonise/Config/commit/155015e2b87d1a8431e98665221f4b35e61bce75))
* **semantic-release:** git not commiting release ([18369db](https://github.com/Colonise/Config/commit/18369db21e824acafe8811712b6166b1f2cdd805))
* **semantic-release:** git not committing release ([78c8781](https://github.com/Colonise/Config/commit/78c8781007d65b19a4c30c8e6707215c8f4f1209))
* **semantic-release:** github npm package asset ([40a76da](https://github.com/Colonise/Config/commit/40a76da93efb3ec2ded5da10c4923fbd8b86aa79))
* gulpfile for self ([83d84ce](https://github.com/Colonise/Config/commit/83d84ce7e8ecb927f71c2692c9bc6e2a54041a1a))
* gulpfile.ts ([c18c03e](https://github.com/Colonise/Config/commit/c18c03ec857c7a369a59f4bb9fc3d25fa72140c0))
* gulpfile.ts for self and _gulpfile.js for others ([fee5a2e](https://github.com/Colonise/Config/commit/fee5a2ed906a15be92ba85f81d7e19c3fb1fd240))
* gulpfile.ts, semantic-release.ts ([a13c532](https://github.com/Colonise/Config/commit/a13c53212b3dfb2a88d6dee976e517b59ed033b3))
* **stub:** import chai ([36b13b4](https://github.com/Colonise/Config/commit/36b13b4c72b535e9ec166f41f159781a33b43904))
* **semantic-release:** import proper config file ([ee6a00f](https://github.com/Colonise/Config/commit/ee6a00f75d895195e925ef63f92207dbc9b60b45))
* **eslint:** improved rules ([7a74cb5](https://github.com/Colonise/Config/commit/7a74cb5cea50859ad9250ef42a536b875b1964dc))
* include a base file to fix semantic-release deploy ([0d997be](https://github.com/Colonise/Config/commit/0d997be642d9d86d5eb6fcd7ea024190a03018c2))
* include all files from default folder ([a48b8ee](https://github.com/Colonise/Config/commit/a48b8ee468d7698275bb89eb88bbebbafaa178cb))
* **npm:** include gulpfile.ts in publish ([34bfdef](https://github.com/Colonise/Config/commit/34bfdefe6614d7f827b5237c59ec31a7d08875b4))
* **install:** include middle-man installation script ([aa17876](https://github.com/Colonise/Config/commit/aa178760078fc2b9ab77a4ee14bfb661c3aecae6))
* **install:** installation freezes on file copy ([785004d](https://github.com/Colonise/Config/commit/785004d1a096d149cad456aa66676b12ec60aa8e))
* installation process ([91873c3](https://github.com/Colonise/Config/commit/91873c30f84d4b040b400e20a3d6d279d6553258))
* **travis-ci:** move distribution build to script step ([41be05f](https://github.com/Colonise/Config/commit/41be05f63a8314723b43c4de649c57849905635f))
* **install:** move install script to src/dist ([cbd71b1](https://github.com/Colonise/Config/commit/cbd71b1a8c25c865d0e673ba2fea73f644d42e80))
* move rename command to before_deploy ([2a62fa3](https://github.com/Colonise/Config/commit/2a62fa34b091d4e65c526df4d8eaa24c25725a73))
* move semantic-release.ts and gulpfile.ts to src and re-export ([68c43ef](https://github.com/Colonise/Config/commit/68c43ef6de92125058fac093f3aa4aa41df96fcc))
* **release:** not including files starting with "." ([61be66f](https://github.com/Colonise/Config/commit/61be66fda270da613e95156b2661a45fd9e4f986))
* **semantic-release:** npm package in github release assets ([99ecab4](https://github.com/Colonise/Config/commit/99ecab44e5d08275f502b3f5bef1196b2c82822e))
* **distribute:** only add install script to config ([8c51661](https://github.com/Colonise/Config/commit/8c516617e2e184d9f10bd2f01355c01c096d0d9a))
* **semantic-release:** only commit package.json and changelog ([fd2db3b](https://github.com/Colonise/Config/commit/fd2db3ba8e3125ddd8228c6e66fd3b85ce1fb81d))
* only copy default files in config package ([f7b23f2](https://github.com/Colonise/Config/commit/f7b23f22b810da0e933b3238977aad14598ecd6e))
* **semantic-release:** only include tarball for github ([9147b9a](https://github.com/Colonise/Config/commit/9147b9a144413ba670b0dfe1afd41c8ccff2036c))
* **install:** only use typescript/tslint when required ([f35283f](https://github.com/Colonise/Config/commit/f35283fe78fa87bba442b538964dd120df12bda6))
* **default:** package.json, and ignore files ([292dd69](https://github.com/Colonise/Config/commit/292dd69854b243f3dacfe06b01a6dfde83f3492b))
* package.json, tsconfig.json, and src/tsconfig.json ([450e1dc](https://github.com/Colonise/Config/commit/450e1dc370fa297eafdb8524723251acc5cdf78e))
* properly configure dependabot ([b6dac9f](https://github.com/Colonise/Config/commit/b6dac9fc0c15882cb07dbfb429d2d8ab7e43f42c))
* **install:** properly copy and overwrite files ([862999c](https://github.com/Colonise/Config/commit/862999c4c7076c7b76b3df96c4419fe4f7dc5cf2))
* properly copy default files when distributing ([903ee7f](https://github.com/Colonise/Config/commit/903ee7f597c178cee75268461a504d690dd00012))
* **distribute:** properly detect if is currently config ([27ca5a5](https://github.com/Colonise/Config/commit/27ca5a5e711198bbfdc4d93632df6eb6f691d475))
* properly export declaration files ([2caa688](https://github.com/Colonise/Config/commit/2caa68853ba69e9c71ae82c9f63e42142b9462c4))
* **coverage:** properly export nyc config ([9f55b80](https://github.com/Colonise/Config/commit/9f55b8054efbf21c28f23a5f6d04862064e7013b))
* **eslint:** properly import reusable rules ([b447cc4](https://github.com/Colonise/Config/commit/b447cc46f83febc22927fc6605189f3804a898e1))
* properly prefix PRs ([038d5e3](https://github.com/Colonise/Config/commit/038d5e30e9738678c104272aea00de1b99b9f1dd))
* **gulp:** properly use module 'app-root-path' ([18633f7](https://github.com/Colonise/Config/commit/18633f7d9997af40b623afe5ee41717d767fea41))
* **release:** re-add GITHUB_TOKEN ([f742c6b](https://github.com/Colonise/Config/commit/f742c6b5ff3273d88a95408f6a51f587a4ed41d5))
* **eslint:** re-order @typescript-eslint/member-ordering ([1181f9d](https://github.com/Colonise/Config/commit/1181f9d3b61d0f407f8c805c0b6b026db9ede16e))
* **semantic-release:** regex invalid escapes ([21e7250](https://github.com/Colonise/Config/commit/21e7250d3891b236d3fc5eb04ec07da789073e86))
* remove accidental inclusion of /distribute files ([398ddd6](https://github.com/Colonise/Config/commit/398ddd620d37b5905b39f38eeaf14c6269588167))
* **eslint:** remove base no-useless-constructor ([a80050c](https://github.com/Colonise/Config/commit/a80050cc3d9065788e1b680a24206543d34f7c8b))
* remove git committer from gpg import ([b246bb3](https://github.com/Colonise/Config/commit/b246bb302ee9b9f9fd7b91808a0b95f259d57e9c))
* remove git push signing ([4fbec43](https://github.com/Colonise/Config/commit/4fbec436d01f8465ee851bdc3ad5613f7419b91f))
* **install:** remove postinstall from root package.json ([411d254](https://github.com/Colonise/Config/commit/411d254acbe32b8ed1b4fe4466a8470e80100f56))
* **npm:** remove relative paths in files property ([4374fd5](https://github.com/Colonise/Config/commit/4374fd50729aa54f498a8f9b038bf43c09f239dc))
* **dependabot:** remove scope from commit message ([dc9e2e8](https://github.com/Colonise/Config/commit/dc9e2e876327b5015d138c2a1f6076a71c775e1b))
* **GithubActions:** Remove unnecessary environment variables ([69cd182](https://github.com/Colonise/Config/commit/69cd18259c1973ff09951642d42cc8b47dd0a4c8))
* **gulp:** remove unused 'path' module ([72fedcf](https://github.com/Colonise/Config/commit/72fedcf356fa4a31fac1156bff387ca4678960f6))
* **semantic-release:** remove unused code ([0a8f520](https://github.com/Colonise/Config/commit/0a8f52047936af1da123d74437ae4d50625a807d))
* **gulp:** resolving semantic-release.ts ([24ec4c5](https://github.com/Colonise/Config/commit/24ec4c554beee50e23c09268e30346ffa7d86ee7))
* **install:** revert rename removal ([24b7d58](https://github.com/Colonise/Config/commit/24b7d58c8b75fcb7bdd5420c3a233ef7981a88ba))
* **release:** run build before Release step ([3667de7](https://github.com/Colonise/Config/commit/3667de7c83c707f4ed2e721efbe261dfe5d6ab6b))
* **coverage:** run build before test coverage ([cef7d8a](https://github.com/Colonise/Config/commit/cef7d8a8215ed7e5c298d1b9e4871dec2845420f))
* separate essential files from config essential files ([dc3aa35](https://github.com/Colonise/Config/commit/dc3aa35cfceb5c2ec2026f521ab7aa3f4a8f9d73))
* **travis-ci:** skip default script step in deploy job ([55c9279](https://github.com/Colonise/Config/commit/55c9279780c13b04395ceafaaa58e67c917c64da))
* **github-actions:** temporarily remove greenkeeper ([4b10439](https://github.com/Colonise/Config/commit/4b1043966226e6b0ab161aed86ca1ed72ca1d0d4))
* try prepare instead of prepublish ([422f3cf](https://github.com/Colonise/Config/commit/422f3cfc609f8a025677e9cc2812fb0880670d10))
* try renaming _gulpfile using travis ([c01da8b](https://github.com/Colonise/Config/commit/c01da8b23176f44ef38284695b001f06796a89cf))
* try using semantic-release.ts for self config ([85b9dd0](https://github.com/Colonise/Config/commit/85b9dd0c56faa8e5b2fd5b3cbaace00cc2102b51))
* **eslint:** turn off no-duplicate imports ([8c7d4b8](https://github.com/Colonise/Config/commit/8c7d4b838a7e819605d3bad048371643739a3dc7))
* **eslint:** turn off sort-keys ([3159e7a](https://github.com/Colonise/Config/commit/3159e7a5f15ebe2a931374407fde2ed322dabea5))
* **github-action:** typo ([8d8b115](https://github.com/Colonise/Config/commit/8d8b11570a7ed42471c65e86cccb3d723ca2d819))
* **eslint:** typo in @typescript-eslint/type-annotation-spacing ([81f8bfe](https://github.com/Colonise/Config/commit/81f8bfeb545bc7fdba50f5630ff5951d205ec9b5))
* **travis-ci:** typo in gpg output file path ([b933930](https://github.com/Colonise/Config/commit/b93393022d6b981e3f29b71d92547595d8d18b8d))
* uninstall redundant packages ([50c84cf](https://github.com/Colonise/Config/commit/50c84cfac733fff3fcce760e4639c39472b37b9d))
* **install:** unrename script has incorrect path ([7f0249e](https://github.com/Colonise/Config/commit/7f0249edda2fdf9fe160bcdf3551dcc1977b8a11))
* update dependabot config to version 2 ([8a30faa](https://github.com/Colonise/Config/commit/8a30faa51d8d840152edea65e109f4afd5aa0872))
* update typescript and @types/node to latest ([70e99d2](https://github.com/Colonise/Config/commit/70e99d23ce53362522d9fe480247e1066356bcd9))
* **travis-ci:** use [@next](https://github.com/next) version of semantic-release ([aefcc5e](https://github.com/Colonise/Config/commit/aefcc5e90e45ee9e9f6a1becc4ec43c1eb4b1967))
* **.npmigore:** use default .npmignore ([7cc0bd2](https://github.com/Colonise/Config/commit/7cc0bd25121d4fa65fb35947bc572c9c3dabd9d4))
* **travis-ci:** use gpg instead of openssl to decrypt ([96730aa](https://github.com/Colonise/Config/commit/96730aad8d0b03816fdc005a2f2979cb1190bb3b))
* **gulp:** use module 'app-root-path' ([16f38af](https://github.com/Colonise/Config/commit/16f38af1d7d27c46bb15fdc5e5af4d8769323f2d))
* use require for exporting ([2b48ef5](https://github.com/Colonise/Config/commit/2b48ef5919e55abfb991def84bcc6341de554ee1))
* **install:** use typescript and ts-node ([4faf145](https://github.com/Colonise/Config/commit/4faf1456840528f243017e3046a78e4dd9d8a13f))


### Features

* **tsconfig:** add and sort rules ([55682d6](https://github.com/Colonise/Config/commit/55682d683fed6b33ff21a7ceb62dabf067b6b452))
* **chai:** add chai and mocha/chai/node typings ([296246e](https://github.com/Colonise/Config/commit/296246ec8df7d070c7711cbae5e386d35c9e772e))
* **greenkeeper:** add config file ([f4f0ea7](https://github.com/Colonise/Config/commit/f4f0ea7152c95b7bbc11db2264f788245515f236))
* add default tsconfig.json file to source folder ([342d381](https://github.com/Colonise/Config/commit/342d3818e59003a7385dcc6d3f49c535681a23cd))
* **github:** add distribution zip file ([6cab303](https://github.com/Colonise/Config/commit/6cab303f968fd259361a56cd92bea2172144c0e8))
* **Greenkeeper:** add greenkeeper to default README ([c216804](https://github.com/Colonise/Config/commit/c216804578b10b2d0dfe50cc52eae792b457916b))
* add issue templates ([e025e7e](https://github.com/Colonise/Config/commit/e025e7e01639802ee379440838d0bb93c30de222))
* add README to documentation root ([0822a96](https://github.com/Colonise/Config/commit/0822a96e676d1d9bd0f4c6a577a9e12fe64050c3))
* **CONTRIBUTING:** add/update CONTRIBUTING.md ([adefe91](https://github.com/Colonise/Config/commit/adefe91efdd72ab55829f6426719e7c1f0d6689e))
* **README:** add/update README ([f8c4a90](https://github.com/Colonise/Config/commit/f8c4a904a6aab585c8a895ad84ab228b0a8d6d5f))
* **tslint:** allow leading underscore for variable-name ([c73648a](https://github.com/Colonise/Config/commit/c73648a26d9497d1ca6aa10efad3f93b363881de))
* **NPM:** change default name and description ([fc6bb7b](https://github.com/Colonise/Config/commit/fc6bb7bfc86fb071cfd8a3d599c4786d9dc22ab3))
* convert 'semantic-release.js' to TypeScript ([c757733](https://github.com/Colonise/Config/commit/c75773359eb4047d6a3d5faa26d0c2961185a66a))
* convert 'semantic-release.js' to TypeScript ([feffdba](https://github.com/Colonise/Config/commit/feffdbafcd3836cc2f419158da0b012bac94eff0))
* **github-actions:** convert travis to github actions ([5cd2358](https://github.com/Colonise/Config/commit/5cd23580df4f79f2a610550b2c43eca7bf4c90dc))
* create dedicated folder with files for distribution ([d0ea7e2](https://github.com/Colonise/Config/commit/d0ea7e250865e125548d029f7d7471f825a74f56))
* dependabot ([306618d](https://github.com/Colonise/Config/commit/306618dc9a7ab7b0798a25564f637fcdbd5145cb))
* **travis-ci:** enable git code signing ([51de202](https://github.com/Colonise/Config/commit/51de2029586a017a5ea820ab349a03cabbcae060))
* Include default config folder to copy ([5b8e181](https://github.com/Colonise/Config/commit/5b8e1810905d33d64647e4aa5853619ddad54ce6))
* include NYC and ignore files ([aefe3bb](https://github.com/Colonise/Config/commit/aefe3bbcc0682210376c934a885ad68be6b3ad47))
* **assets:** include tarball and dist files in publish ([bb98888](https://github.com/Colonise/Config/commit/bb98888d0e6c3a9b78ff562621967c434869f331))
* **install:** move install script into gulpfile.ts ([e040adf](https://github.com/Colonise/Config/commit/e040adf3a7b88cf5098c7f3293960c43e84bd99f))
* overwrite default files when needed ([0ed8cab](https://github.com/Colonise/Config/commit/0ed8cabe1807602ca24c64b07ec5706f29b3947a))
* **README:** refine wording and use reference links ([2ebcef6](https://github.com/Colonise/Config/commit/2ebcef63dd2db661d1fbfc2648b1d690cac811ba))
* **gulp:** remove all references to gulp ([a89d690](https://github.com/Colonise/Config/commit/a89d6902e4fce69fc8c3bf08588c1c8475108e7a))
* **tslint:** remove deprecated rule ([df201ec](https://github.com/Colonise/Config/commit/df201ec111644f0c75a041e472132aa149d4ae15))
* rename 'dist' folder to 'distribute' ([0f57a35](https://github.com/Colonise/Config/commit/0f57a353854ca133c24dcbc743437a885a34a9b8))
* rename 'src' folder to 'source' ([6af2548](https://github.com/Colonise/Config/commit/6af254888ddcc44ce634e463f5c3cb0fc0b26ec9))
* **install:** rename default files before copy ([0be006f](https://github.com/Colonise/Config/commit/0be006feabb251f627e5e3e8f0d1ae1e3ca65dd8))
* **README:** replace travis-ci with build ([4f56d9f](https://github.com/Colonise/Config/commit/4f56d9f5a7598c95c22a0e32990bee2c211015d9))
* **gpg:** start signing commits again ([cc315ad](https://github.com/Colonise/Config/commit/cc315ad37a811cf2d439e3fbc2040605399c25d0))
* update all packages to latest ([83d8abd](https://github.com/Colonise/Config/commit/83d8abd6ffa17371e700eb83aa6465c14b9533a9))
* update default configurations ([fb1088d](https://github.com/Colonise/Config/commit/fb1088deda6a82ff638e7b2fd7cdae6369cecded))
* update default files ([8df67dd](https://github.com/Colonise/Config/commit/8df67ddcdf5d6a511ba02fa01d3ee7afb02c6ce6))
* **semantic-release:** update semantic-release config ([aa3c6c5](https://github.com/Colonise/Config/commit/aa3c6c5bfbae346f9c0af1210ee7987a7ae2eac0))
* update supported node versions ([436a6b2](https://github.com/Colonise/Config/commit/436a6b250e55686eae669e4f3898053bd9fc90bf))
* **semantic-release:** upload npm changes to git ([f4747d7](https://github.com/Colonise/Config/commit/f4747d7c7aa2408b688ab802bed4865d59c663da))
* **travis-ci:** use a job matrix ([31cd809](https://github.com/Colonise/Config/commit/31cd809f01230f5a0c6b5b08e44e45aaba9312c8))
* use eslint instead of tslint for linting ([c132bd0](https://github.com/Colonise/Config/commit/c132bd0aec0b4f74fedb02560ab5d37900de985d))
* **coverage:** use NYC instead of gulp-istanbul ([a4f7a7e](https://github.com/Colonise/Config/commit/a4f7a7e915f59b11f4f33a2067bedee6baf01780)), closes [#12](https://github.com/Colonise/Config/issues/12)


### BREAKING CHANGES

* Release version 1
Attempt renaming index.js to semantic-release.js
* **gulp:** removed gulp
* renamed 'semantic-release.js' to 'semantic-release.ts'

## [3.10.15](https://github.com/Colonise/Config/compare/v3.10.14...v3.10.15) (2020-10-06)

## [3.10.14](https://github.com/Colonise/Config/compare/v3.10.13...v3.10.14) (2020-10-05)

## [3.10.13](https://github.com/Colonise/Config/compare/v3.10.12...v3.10.13) (2020-09-30)

## [3.10.12](https://github.com/Colonise/Config/compare/v3.10.11...v3.10.12) (2020-09-30)


### Bug Fixes

* **eslint:** @typescript-eslint/init-declarations ([45b6d2f](https://github.com/Colonise/Config/commit/45b6d2f947e0531d1f3d9407f07f24a4fe8ec037))

## [3.10.11](https://github.com/Colonise/Config/compare/v3.10.10...v3.10.11) (2020-09-29)


### Bug Fixes

* **default:** package.json, and ignore files ([0f4bee8](https://github.com/Colonise/Config/commit/0f4bee88babddcc65ccb6d5d0a6d885d01086833))

## [3.10.10](https://github.com/Colonise/Config/compare/v3.10.9...v3.10.10) (2020-09-27)


### Bug Fixes

* **install:** properly copy and overwrite files ([a9e3462](https://github.com/Colonise/Config/commit/a9e34621ffe66544c3adcf4cd94c9abcb60044b8))

## [3.10.9](https://github.com/Colonise/Config/compare/v3.10.8...v3.10.9) (2020-09-27)


### Bug Fixes

* **eslint:** remove base no-useless-constructor ([79692d8](https://github.com/Colonise/Config/commit/79692d875077113a6dbdb5b9861f044bde163796))

## [3.10.8](https://github.com/Colonise/Config/compare/v3.10.7...v3.10.8) (2020-09-27)


### Bug Fixes

* **eslint:** @typescript-eslint/keyword-spacing for ([88a8784](https://github.com/Colonise/Config/commit/88a8784c62341a62ddc97d6499c1f959957151ef))

## [3.10.7](https://github.com/Colonise/Config/compare/v3.10.6...v3.10.7) (2020-09-27)


### Bug Fixes

* **eslint:** add .eslintignore to default ([d73fcfb](https://github.com/Colonise/Config/commit/d73fcfb43d60586bbf858880a8b10e83c049df29))
* **eslint:** re-order @typescript-eslint/member-ordering ([69df080](https://github.com/Colonise/Config/commit/69df0802c16bf907e27081d210c40c78a2f01e2b))
* **eslint:** turn off no-duplicate imports ([f561fd9](https://github.com/Colonise/Config/commit/f561fd9b74b33bf050b82f8df99cf6a686c66abf))

## [3.10.6](https://github.com/Colonise/Config/compare/v3.10.5...v3.10.6) (2020-09-27)


### Bug Fixes

* **distribute:** properly detect if is currently config ([d4a3e22](https://github.com/Colonise/Config/commit/d4a3e223e2b731de474af336498576e25f643898))

## [3.10.5](https://github.com/Colonise/Config/compare/v3.10.4...v3.10.5) (2020-09-27)


### Bug Fixes

* **coverage:** properly export nyc config ([a624ed1](https://github.com/Colonise/Config/commit/a624ed1318f0cb872a7b33182c0828eabeec9002))

## [3.10.4](https://github.com/Colonise/Config/compare/v3.10.3...v3.10.4) (2020-09-27)


### Bug Fixes

* build from /generated instead of /source ([3c476ea](https://github.com/Colonise/Config/commit/3c476ea93ea535a83af8a3f458327119286f2708))

## [3.10.3](https://github.com/Colonise/Config/compare/v3.10.2...v3.10.3) (2020-09-27)


### Bug Fixes

* properly export declaration files ([8df0602](https://github.com/Colonise/Config/commit/8df0602edaeeadf59612c26b99d8fe0d9889fea8))

## [3.10.2](https://github.com/Colonise/Config/compare/v3.10.1...v3.10.2) (2020-09-26)


### Bug Fixes

* separate essential files from config essential files ([42a0e39](https://github.com/Colonise/Config/commit/42a0e3952bd453ad28e4536918f8d0a3d324fa66))

## [3.10.1](https://github.com/Colonise/Config/compare/v3.10.0...v3.10.1) (2020-09-26)


### Bug Fixes

* only copy default files in config package ([a711c30](https://github.com/Colonise/Config/commit/a711c30298115b13536d0c676476c5034cfd5b20))

# [3.10.0](https://github.com/Colonise/Config/compare/v3.9.1...v3.10.0) (2020-09-26)


### Bug Fixes

* accidentally copy wrong files on distribute ([dd8e059](https://github.com/Colonise/Config/commit/dd8e0590c73cee7423533b7ee7c9cbc70bc07063))


### Features

* include NYC and ignore files ([fa6a592](https://github.com/Colonise/Config/commit/fa6a59215bcc26870f75a5759afdabfdd30481d0))

## [3.9.1](https://github.com/Colonise/Config/compare/v3.9.0...v3.9.1) (2020-09-26)


### Bug Fixes

* properly copy default files when distributing ([4fda8f5](https://github.com/Colonise/Config/commit/4fda8f535f0320dd072d63b556274cbdfd18b7a5))

# [3.9.0](https://github.com/Colonise/Config/compare/v3.8.0...v3.9.0) (2020-09-26)


### Features

* add default tsconfig.json file to source folder ([2078668](https://github.com/Colonise/Config/commit/2078668a702b7b44a57f0835757fd865ea7fac11))

# [3.8.0](https://github.com/Colonise/Config/compare/v3.7.5...v3.8.0) (2020-09-26)


### Bug Fixes

* delete gpg from default folder ([a5b2424](https://github.com/Colonise/Config/commit/a5b2424b0dff6e044d90a67b44fe847c6d580b9e))


### Features

* overwrite default files when needed ([d7b2d84](https://github.com/Colonise/Config/commit/d7b2d84838f3d4ff62994510c2cf931f331f00c6))

## [3.7.5](https://github.com/Colonise/Config/compare/v3.7.4...v3.7.5) (2020-09-26)

## [3.7.4](https://github.com/Colonise/Config/compare/v3.7.3...v3.7.4) (2020-09-21)


### Bug Fixes

* **eslint:** typo in @typescript-eslint/type-annotation-spacing ([040b4d6](https://github.com/Colonise/Config/commit/040b4d6fe0d93999f89554cc3458ad44c0200277))

## [3.7.3](https://github.com/Colonise/Config/compare/v3.7.2...v3.7.3) (2020-09-21)


### Bug Fixes

* **eslint:** improved rules ([19d183c](https://github.com/Colonise/Config/commit/19d183c454f7f5b5355540a33e8aa629977bbbe6))

## [3.7.2](https://github.com/Colonise/Config/compare/v3.7.1...v3.7.2) (2020-09-21)


### Bug Fixes

* **eslint:** properly import reusable rules ([40075b6](https://github.com/Colonise/Config/commit/40075b60102b6723240b8c1a1a841845a19e942d))

## [3.7.1](https://github.com/Colonise/Config/compare/v3.7.0...v3.7.1) (2020-09-21)

# [3.7.0](https://github.com/Colonise/Config/compare/v3.6.3...v3.7.0) (2020-09-20)


### Bug Fixes

* add issue templates to default ([4eec507](https://github.com/Colonise/Config/commit/4eec507d7b75aaf7be13ff010434967b92a592a7))


### Features

* add issue templates ([505eee1](https://github.com/Colonise/Config/commit/505eee18d8008c95914be3b9dd66e90cef5181ba))

## [3.6.3](https://github.com/Colonise/Config/compare/v3.6.2...v3.6.3) (2020-09-20)


### Bug Fixes

* **semantic-release:** github npm package asset ([4dee177](https://github.com/Colonise/Config/commit/4dee177cc32ad1037523db4006f8f99b899a2891))

## [3.6.2](https://github.com/Colonise/Config/compare/v3.6.1...v3.6.2) (2020-09-20)

## [3.6.1](https://github.com/Colonise/Config/compare/v3.6.0...v3.6.1) (2020-09-20)


### Bug Fixes

* **semantic-release:** npm package in github release assets ([178185e](https://github.com/Colonise/Config/commit/178185ec6a0cbaa7ded2ca98cb6f8bbd7777df7b))

# [3.6.0](https://github.com/Colonise/Config/compare/v3.5.0...v3.6.0) (2020-09-20)


### Bug Fixes

* **github-actions:** build on multiple node versions ([d8fee11](https://github.com/Colonise/Config/commit/d8fee1158413fba96e958bf25339d7d290235d14))
* **semantic-release:** only commit package.json and changelog ([9bd6032](https://github.com/Colonise/Config/commit/9bd603298a3c715bd2dd5077806bfbf32e0fb2e1))
* remove accidental inclusion of /distribute files ([2e9b024](https://github.com/Colonise/Config/commit/2e9b024b3298fdee26c96c0538d54b40d0d6fe32))
* **github-action:** typo ([3451b1d](https://github.com/Colonise/Config/commit/3451b1db301c1465742917c3efe6b2a7bc6c7912))


### Features

* **github:** add distribution zip file ([803aefa](https://github.com/Colonise/Config/commit/803aefabcb203e733231753eadff1a64155323cb))

# [3.5.0](https://github.com/Colonise/Config/compare/v3.4.3...v3.5.0) (2020-09-20)


### Bug Fixes

* **semantic-release:** enforce gpg2 ([ed0e273](https://github.com/Colonise/Config/commit/ed0e273c35c114d5f7651f2ef3bcd1c49fc0debe))
* **semantic-release:** regex invalid escapes ([5a47c16](https://github.com/Colonise/Config/commit/5a47c16fdefa4bd3a30b36d4b26bd70d6ffea751))
* **eslint:** turn off sort-keys ([59208b0](https://github.com/Colonise/Config/commit/59208b0c9c8306b638b97940fa2dafb9778da018))


### Features

* **semantic-release:** update semantic-release config ([6b749e2](https://github.com/Colonise/Config/commit/6b749e263d3ca024fa9d158f6b8e3bf0f93738f7))

## [1.0.1](https://github.com/Colonise/Config/compare/v1.0.0...v1.0.1) (2018-11-11)


### Bug Fixes

* gulpfile.ts ([fbb6181](https://github.com/Colonise/Config/commit/fbb6181))
* package.json, tsconfig.json, and src/tsconfig.json ([93d5695](https://github.com/Colonise/Config/commit/93d5695))

# 1.0.0 (2018-11-11)


### Features

* Include default config folder to copy ([243db50](https://github.com/Colonise/Config/commit/243db50))


### BREAKING CHANGES

* Release version 1
Attempt renaming index.js to semantic-release.js
