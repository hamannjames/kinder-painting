export const load = async ({url}) => {
    const metaTags = Object.freeze({
        title: 'Home'
    });

    return {
        metaTagsChild: metaTags
    }
}