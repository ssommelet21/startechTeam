const FormatSections = (old_array, atype) => {
  let new_array = [];
  let i = 0;
  old_array.forEach((element) => {
    new_array.push({ key: i++, uri: element.imageUrl, text: element.titre });
  });

  let trav = {
    title: atype,
    data: new_array,
  };

  return [trav];
};

exports.FormatSections = FormatSections;
