import { TranslateService } from '@ngx-translate/core';

export class LanguagesInfo {

    private static readonly LOCAL_STORAGE_LANGUAGE_INFO_KEY = 'languageInfo';
    private static translateService: TranslateService = null;

    public static readonly AVAILABLE_LANGUAGES = [
        'es-ES',
        'en-GB',
    ];

    public static readonly DEFAULT_LANGUAGE = 'es-ES';

    public static initTranslateService(translateService: TranslateService) {
        if (translateService) {
            LanguagesInfo.translateService = translateService;
            LanguagesInfo.translateService.addLangs(LanguagesInfo.AVAILABLE_LANGUAGES);
            LanguagesInfo.translateService.setDefaultLang(LanguagesInfo.DEFAULT_LANGUAGE);
        }
    }

    public static loadLanguageByUser(username: string) {
        const language: string = LanguagesInfo.getLocalStorageLanguage(username);
        if (language && LanguagesInfo.translateService.langs.indexOf(language) >= 0) {
            LanguagesInfo.translateService.use(language);
        } else {
            LanguagesInfo.loadLanguageByDevice();
        }
    }

    public static saveCurrentLanguageToUser(username: string) {
        let languageInfo: object = LanguagesInfo.getLanguageInfoObject();
        if (!languageInfo) {
            languageInfo = {};
        }
        languageInfo[username] = LanguagesInfo.getCurrentLanguage();
        localStorage.setItem(LanguagesInfo.LOCAL_STORAGE_LANGUAGE_INFO_KEY, JSON.stringify(languageInfo));
    }

    public static useLanguageByUser(username: string, language: string) {
        if (language && LanguagesInfo.translateService.langs.indexOf(language) >= 0) {
            LanguagesInfo.translateService.use(language);
            this.translateService.currentLang = language;
            LanguagesInfo.saveCurrentLanguageToUser(username);
        }
    }

    public static getCurrentLanguage(): string {
        let currentLang = LanguagesInfo.translateService.currentLang;
        if (!currentLang) {
            currentLang = LanguagesInfo.translateService.getDefaultLang();
        }
        return currentLang;
    }

    private static getLocalStorageLanguage(username: string): string {
        let languageToReturn: string = null;
        const languageInfoObj: object = LanguagesInfo.getLanguageInfoObject();
        if (languageInfoObj) {
            const languageByUser: string = languageInfoObj[username];
            if (languageByUser) {
                languageToReturn = languageByUser;
            }
        }
        return languageToReturn;
    }

    private static getLanguageInfoObject(): object {
        let toReturn: object = null;
        try {
            const languageInfoString: string = localStorage.getItem(LanguagesInfo.LOCAL_STORAGE_LANGUAGE_INFO_KEY);
            if (languageInfoString) {
                const languageInfoObj: object = JSON.parse(languageInfoString);
                if (languageInfoObj) {
                   toReturn = languageInfoObj;
                }
            }
        } catch (error) {
            // Nothing to do
        }
        return toReturn;
    }

    private static loadLanguageByDevice() {
        let languageToSet: string = null;
        if (navigator && navigator.languages) {
            const requestLanguages = navigator.languages;
            if (requestLanguages && requestLanguages.length) {
                for (const language of requestLanguages) {
                    if (LanguagesInfo.translateService.langs.indexOf(language) >= 0) {
                        languageToSet = language;
                        break;
                    }
                }
            }
        }
        if (languageToSet) {
            LanguagesInfo.translateService.use(languageToSet);
        } else {
            LanguagesInfo.translateService.use(LanguagesInfo.translateService.getDefaultLang());
        }
    }
}
