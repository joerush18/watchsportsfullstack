const request = require("request");
const cheerio = require("cheerio");
const express = require("express");
const router = express.Router();

const LINK = "https://sportsbay.org/sports/";

router.get("/:sportName", (req, res, next) => {
  try {
    const id = req.params.sportName;
    request(LINK + id, (err, resp, html) => {
      const $ = cheerio.load(html);

      var list = [];

      var today = $(".date > .sticky-header ").text();

      $("tbody> tr").each((index, element) => {
        var id = $(element).attr("id");

        var competition = $(element).find(".competition > a").text();

        var time = $(element).find(".time > span").text();

        var date = $(element).find(".time > span").attr("title");

        var game = $(element).find(".event > a.summary").text();

        var imgSrc = $(element).find(".type >a >img").attr("src");

        var country = $(element).find(".country > a > span").attr("title");

        var link = $(element).find(".event > a.summary").attr("href");

        var teamsImage = [];
        var teams = $(element)
          .find(".event > a")
          .each((index, elem) => {
            teamsImage.push($(elem).find(".team > img").attr("src"));
          });
        if (link != null) {
          list.push({
            id: id,
            Matchtitle: game,
            Date: date.slice(0, 10),
            Matchtime: time,
            Country: country,
            Competition: competition,
            Img: imgSrc,
            MatchLink: "https://sportsbay.org" + link,
            teamsImage: teamsImage,
          });
        }
      });
      res.status(200).json({
        total: list.length,
        // today: today,
        list: list,
      });
    });
  } catch (e) {
    res.status(401).json({
      emessage: e.message,
    });
  }
});

module.exports = router;
