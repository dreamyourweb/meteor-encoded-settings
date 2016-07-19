const loadEncodedMeteorSettings = (MeteorSettings) => {
    const encodedSettings = process.env["METEOR_SETTINGS_ENCODED"];
    if (encodedSettings) {
        const jsonString = decodeURI(encodedSettings).trim();
        MeteorSettings = Object.assign(MeteorSettings, JSON.parse(decodeURI(encodedSettings)));
    }
}

export default loadEncodedMeteorSettings;