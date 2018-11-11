const Tweet = require("../models/Tweet");

module.exports = {
    async store(req, res) {
        const twwet = await Tweet.findById(req.params.id);

        twwet.set({ likes: twwet.likes +1 });

        await twwet.save();

        req.io.emit("like", tweet);
        
        return res.json(twwet);
    }
}