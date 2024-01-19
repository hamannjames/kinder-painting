export const load = async ({url}) => {
    const metaTags = Object.freeze({
        title: 'About Us'
    });

    return {
        metaTagsChild: metaTags
    }
}