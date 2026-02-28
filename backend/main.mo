import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type InquiryType = {
    #general;
    #admissions;
    #support;
    #other;
  };

  type ContactInquiry = {
    id : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    subject : InquiryType;
    message : Text;
    timestamp : Int;
  };

  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      if (inquiry1.id < inquiry2.id) { #less } else if (inquiry1.id > inquiry2.id) { #greater } else {
        #equal;
      };
    };
  };

  var nextId = 0;

  let contactInquiries = Map.empty<Nat, ContactInquiry>();

  public shared ({ caller }) func submitContactInquiry(
    fullName : Text,
    email : Text,
    phone : Text,
    subject : InquiryType,
    message : Text,
    timestamp : Int,
  ) : async () {
    let contactInquiry : ContactInquiry = {
      id = nextId;
      fullName;
      email;
      phone;
      subject;
      message;
      timestamp;
    };

    contactInquiries.add(nextId, contactInquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllContactInquiries() : async [ContactInquiry] {
    contactInquiries.values().toArray().sort();
  };

  public query ({ caller }) func getContactInquiry(id : Nat) : async ContactInquiry {
    switch (contactInquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry does not exist") };
      case (?inquiry) { inquiry };
    };
  };

  public shared ({ caller }) func deleteContactInquiry(id : Nat) : async () {
    if (not contactInquiries.containsKey(id)) {
      Runtime.trap("Inquiry does not exist");
    };
    contactInquiries.remove(id);
  };
};
