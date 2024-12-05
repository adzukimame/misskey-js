function isPureRenote(note) {
  return note.renote != null && note.reply == null && note.text == null && note.cw == null && (note.fileIds == null || note.fileIds.length === 0) && note.poll == null;
}
export {
  isPureRenote
};
//# sourceMappingURL=note.js.map
