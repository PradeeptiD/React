const commentsByPost = {
    1: [
        { id: 1, author: "Alice", text: "Great intro! Learnt a Lot!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 2, author: "Bob", text: "Very helpful.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    2: [
        { id: 3, author: "Carol", text: "Hooks are confusing!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 4, author: "Dave", text: "Got it now, thanks!", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    3: [
        { id: 5, author: "Eve", text: "Loved the explanation.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 6, author: "Frank", text: "This helped a lot.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    4: [
        { id: 7, author: "Grace", text: "Node.js is awesome!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 8, author: "Hank", text: "Nice and simple.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    5: [
        { id: 9, author: "Ivy", text: "AI is the future!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 10, author: "Jack", text: "Fascinating read.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    6: [
        { id: 11, author: "Kira", text: "Generative AI is wild!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 12, author: "Leo", text: "Thanks for this.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    7: [
        { id: 13, author: "Mona", text: "Clear and useful.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 14, author: "Nate", text: "Good EDA starter.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    8: [
        { id: 15, author: "Oscar", text: "Helpful checklist!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 16, author: "Pam", text: "Every dev should read.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    9: [
        { id: 17, author: "Quinn", text: "Cybersecurity FTW!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 18, author: "Rita", text: "Bookmarked!", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    10: [
        { id: 19, author: "Sam", text: "CI/CD rocks!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 20, author: "Tina", text: "Nicely explained.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    11: [
        { id: 21, author: "Uma", text: "Manual testing ❤️", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 22, author: "Vic", text: "Still relevant today.", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
    12: [
        { id: 23, author: "Wes", text: "Design tips were gold.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww" },
        { id: 24, author: "Zoe", text: "Engaging read!", image: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D" },
    ],
};

export default commentsByPost;
