//1--------------------------------------------
class PrintMaсhine{
    constructor(fontSize, color, fontFamily){
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
    }
    print(text){
        document.write(`<p style="color: ${this.color}; font-size: ${this.fontSize}; font-family: ${this.fontFamily}">${text}</p>`)
    }
}

let task1 = new PrintMaсhine('25px', 'red', 'Tahoma');
task1.print("Hello world!!! I am Svit and learn JavaScript.");

//2--------------------------------------------
class News{
    constructor(title, text, tags, dateOfPublish){
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.dateOfPublish = dateOfPublish;
    }
    print(){
        let dayNow = Date.now();
        document.write(`<h3>${this.title}</h3>`);
        if(dayNow - this.dateOfPublish.getTime() <= 86400000){
            document.write(`<p style="font-size: 16px;">today</p>`);
        }
        else if(dayNow - this.dateOfPublish.getTime() > 86400000 && dayNow - this.dateOfPublish.getTime() <= 604800000){
            let time = dayNow - this.dateOfPublish.getTime();
            let n = parseInt(time / 86400000)
            document.write(`<p style="font-size: 16px;">${n} days ago</p>`);
        }
        else{
            document.write(`<p style="font-size: 16px;">${this.dateOfPublish.toLocaleDateString()}</p>`);
        }
        document.write(`<p style="font-size: 16px;">${this.text}</p>`);
        console.log(this.tags.length);
        for (let i = 0; i < this.tags.length; i++) {
            document.write(`<a style="font-size: 16px;">${this.tags[i]}</a>`);
        }    
        console.log(this);
    }
}

let newsTitle1 = new News(
    'What is Lorem Ipsum?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit velit animi. Unde perferendis quaerat, aliquam magnam molestias omnis quos at accusantium fuga quas illo, ducimus laudantium deserunt sunt aut!',
    ['#lorem','#ipsum','#text'],
    new Date(2022,11,13,15,35,00,00)
);

let newsTitle2 = new News(
    'Lorem',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit velit animi. Unde perferendis quaerat, aliquam magnam molestias omnis quos at accusantium fuga quas illo, ducimus laudantium deserunt sunt aut!',
    ['#lorem','#text'],
    new Date(2022,11,8,12,30,00,00)
);

let newsTitle3 = new News(
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit velit animi. Unde perferendis quaerat, aliquam magnam molestias omnis quos at accusantium fuga quas illo, ducimus laudantium deserunt sunt aut!',
    ['#ipsum'],
    new Date(2022,11,1,1,30,00,00)
);

newsTitle1.print();
newsTitle2.print();
newsTitle3.print();

//3--------------------------------------------

class NewsFeed{
    constructor(){
        this.news = [];
    }
    get AllNews(){
        return this.news;
    }

    get numberOfNews(){
        return this.news.length
    }

    showNews(){
        document.write(`<hr>`);
        this.news.forEach(el=>{
            el.print();});
    }
    addNews(newNews){
        this.news.push(newNews);
    }
    remove(index){
        if(this.news.length != 0 && index < this.news.length && index >= 0){
            this.news.splice(index, 1);
            alert('The news deleted.')
        }
        else alert('The news is not exists.')
    }
    sortNews(){
        this.news.sort((o1,o2)=>{
            return new Date(o2.dateOfPublish.getTime() - o1.dateOfPublish.getTime());
        });
    }
    searchNewsByTag(tag){
        document.write(`<hr>`);
        document.write(`-----SEARCH-----`);
        this.news.forEach(el=>{
            if(el.tags.includes(tag)){
                el.print();
            }
        })
    }
}

let newsFeed = new NewsFeed();
newsFeed.addNews(newsTitle3);
newsFeed.addNews(newsTitle1);
newsFeed.addNews(newsTitle2);
console.log(newsFeed.numberOfNews);
newsFeed.showNews();
// newsFeed.remove(2);
// newsFeed.showNews();
newsFeed.sortNews();
newsFeed.showNews();
newsFeed.searchNewsByTag('#ipsum');