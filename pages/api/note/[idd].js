import Note from "../../../models/Note";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async(req, res) => {
    const { query: id, method } = req;
    switch (method) {
        case "GET":
            try {
                const note = await Note.findById(id);
                if (!note) {
                    res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: note });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        case "PUT":
            try {
                const note = await Note.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
                if (!note) {
                    res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: note });
            } catch (err) {
                res.status(400).json({ success: false });
            }
        case "DELETE":
            try {
                const note = await Note.deleteOne({ _id: id });
                if (!note) {
                    res.status(400).json({ success: false });
                }
                res.statu(200).json({ success: true, data: {} });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
};