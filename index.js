const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;        // PORT cổng ngẫu nhiên

const configDB = {
    host: '139.180.186.20',
    port: 3306,
    user: 'demo',
    password: 's(20A5Q.Mvk(bvoP',               // dùng xampp thì để trống
    database:'demo_s1',
    multipleStatements: true
};
const mysql = require("mysql2");
const conn = mysql.createConnection(configDB);

app.listen(PORT,function (){
    console.log(`Server is running on port ${PORT}`);
});


app.get("/api/authors",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_authors";
    conn.query(sql,function (err,data) {
        if (err) res.send("404 not found");
        else res.send(data);
    });
});

app.get("/api/categories",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_categories";
    conn.query(sql,function (err,data) {
        if (err) res.send("404 not found");
        else res.send(data);
    });
});

app.get("/api/tags",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_subcategories";
    conn.query(sql,function (err,data) {
        if (err) res.send("404 not found");
        else res.send(data);
    });
});

app.get("/api/images",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_images";
    conn.query(sql,function (err,data) {
        if (err) res.send("404 not found");
        else res.send(data);
    });
});

app.get("/api/posts",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_posts";
    conn.query(sql,function (err,data) {
        if (err) res.send("Cannot fetching posts from database");
        else res.send(data);
    });
});

app.get("/api/planet",function (req,res){           //gọi ra theo đường link
    var sql="select* from nhom4_planet";
    conn.query(sql,function (err,data) {
        if (err) res.send("404 not found");
        else res.send(data);
    });
});