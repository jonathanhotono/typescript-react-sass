//added support for external config to override default config
declare var ExternalConfig;
const manifest = {
    "description": "Hello World Webpart test!"
}
let defaultManifest = manifest;
if(typeof(ExternalConfig) !== "undefined"){
    defaultManifest = ExternalConfig;
}
export default defaultManifest;