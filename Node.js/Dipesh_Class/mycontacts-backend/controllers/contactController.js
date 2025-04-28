//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create all contacts
//@route POST /api/contacts
//@access Public
const createContact = async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get all contact
//@route get /api/contacts
//@access Public
const getContact = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update all contacts
//@route put /api/contacts
//@access Public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete all contacts
//@route delete /api/contacts
//@access Public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
