function shareOnSocialMedia(platform) {
    let url = encodeURIComponent(window.location.href);
    let text = encodeURIComponent('Check out this Baby Register!');
    let shareUrl = '';

    if (platform === 'Facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    } else if (platform === 'Twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    }

    window.open(shareUrl, '_blank');
}
