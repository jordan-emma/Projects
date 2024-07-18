const dailyPredictions = [
    'Today, your energy levels are high! Use this burst of enthusiasm to tackle tasks that have been lingering on your to-do list. Its a great day for initiating new projects or taking the lead in group activities. Stay focused and you will accomplish a lot.',
    'Today is a day for introspection and reflection. Take some time to review your recent decisions and consider if there are any adjustments you need to make. Trust your instincts when it comes to personal matters, and do not hesitate to seek advice from a trusted friend.',
    'Your curiosity is piqued today. It is a wonderful time to explore new interests or dive deeper into a subject that fascinates you. Engage in meaningful conversations with others, as you may gain valuable insights that can broaden your perspective.',
    'Emotions may run high today. Take care of your emotional well-being by expressing your feelings in a constructive way. Focus on nurturing relationships with loved ones and creating a harmonious atmosphere at home or work.',
    'Today is a day for creativity and self-expression. Channel your energy into creative projects or activities that allow you to showcase your talents. Your charisma is strong, so use it to inspire and uplift those around you.', 
    'Practical matters take center stage today. Pay attention to details and tackle tasks with your usual precision. It is a good day for organizing your space or setting realistic goals for yourself. Focus on efficiency and you will make significant progress.', 
    'Harmony and balance are key themes for you today. Seek out peaceful environments and avoid conflicts or drama. Focus on nurturing your relationships and finding common ground with others. Your diplomatic skills will come in handy.', 
    'Today, you are driven by passion and intensity. Channel this energy into projects or goals that are meaningful to you. Trust your intuition when making decisions and do not be afraid to assert yourself when necessary.', 
    'Today is a day for adventure and exploration. Embrace spontaneity and seek out new experiences that stimulate your mind and spirit. Your optimism and enthusiasm are contagious, so share your zest for life with others.', 
    ' Practicality and discipline are your allies today. Focus on long-term goals and take measured steps towards achieving them. Your perseverance and determination will pay off, so stay committed to your ambitions.', 
    'Your innovative spirit shines bright today. Embrace your unique ideas and approach challenges with creativity. It is a great day for brainstorming or collaborating with like-minded individuals who share your vision for the future.', 
    'Intuition guides you today. Trust your gut instincts when navigating interpersonal dynamics or making decisions. Take time for self-care and reflection to maintain emotional balance. Your sensitivity is a strength, so embrace it.'
];

getPrediction = (arr) => {
    const randomPrediction = Math.floor(Math.random() * arr.length);
    return arr[randomPrediction];
}

getLuckyNumber = () => {
    return Math.floor(Math.random() * 101);
}

generateMessage = () => {
    const zodiacSignElement = document.getElementById('zodiac-sign');
    const zodiacSign = zodiacSignElement.value;
    const prediction = getPrediction(dailyPredictions);
    const luckyNumber = getLuckyNumber();

    const message = `As a ${zodiacSign}, ${prediction}<br/>Your lucky number is ${luckyNumber}.`;
    document.getElementById('message').innerHTML = message;
}