function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
}

export const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: ' On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'assets/voteapp/images/avatars/daniel.jpg',
        productImageUrl: 'assets/voteapp/images/products/image-aqua.png'
    },
    {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'assets/voteapp/images/avatars/kristy.png',
        productImageUrl: 'assets/voteapp/images/products/image-rose.png',
    },
    {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'assets/voteapp/images/avatars/veronika.jpg',
        productImageUrl: 'assets/voteapp/images/products/image-steel.png',
    },
    {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'assets/voteapp/images/avatars/molly.png',
        productImageUrl: 'assets/voteapp/images/products/image-yellow.png',
    },
];
