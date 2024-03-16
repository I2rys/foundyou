# FoundYou
Fast website admin panels finder with accuracy.

## Guide
1. Install NodeJS from https://nodejs.org/ and make sure the version is 16+ and less than 17.
2. Run the Github installation command then open your terminal in the repository directory.
3. Run `npm init` in the directory and keep pressing enter until It stops asking.
4. Run the NpmJS installation command.
5. Run the usage command.

## Installation
Github:
```
git clone https://github.com/I2rys/foundyou
```

NpmJS:
```
npm i parallel-park request-async jsdom fs
```

## Usage
Usage
```
node index.js <url> <concurrency (Default: 20)>
``` 
Example
```
node index.js https://example.com/ 100
```

- url - The target website url.
- concurrency - The amount of concurrency to use. If blank then 20 will be used by default.

## License
MIT © I2rys