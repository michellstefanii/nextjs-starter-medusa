export default {
  index: {
    title: "Home",
    description: "Shop all available models only here. Secure Payment."
  },
  store: {
    title: "Store",
    description: "Explore all of our products."
  },
  checkout: {
    title: "Checkout",
    addressSelected: {
      chooseAddress: "Choose an address",
    },
    addresses: {
      shippingAddress: "Shipping address",
      sameBillingAddress: "Same as billing address",
      billingAddress: "Billing address",
      continueDelivery: "Continue to delivery",
      edit: "Edit",
    },
    billingAddress: {
      firstName: "First name",
      firstNameReq: "First name is required",
      lastName: "Last name",
      lastNameReq: "Last name is required",
      company: "Company",
      address: "Address",
      addressReq: "Address is required",
      apartments: "Apartments, suite, etc.",
      postalCode: "Postal code",
      postalCodeReq: "Postal code is required",
      city: "City",
      cityReq: "City is required",
      countryReq: "Country is required",
      state: "State / Province",
      phone: "Phone"
    },
    countrySelect: {
      country: "Country"
    },
    discountCode: {
      freeShipping: "Free shipping",
      codeInvalid: "Code is invalid",
      discount: "Discount",
      code: "Code",
      removeGiftOrder: "Remove gift card from order",
      codeReq: "Code is required",
      apply: "Apply",
      giftCard: "Gift Card"
    },
    payment: {
      payment: "Payment",
      enterYoutAddress: "Enter your address to see available payment options.",
    },
    paymentButton: {
      anError: "An error occurred, status",
      anUnknownError: "An unknown error occurred, please try again."
    },
    paymentInfoMap: {
      stripe: {
        title: "Credit card",
        description: "Secure payment with credit card",
      },
      stripeIdeal: {
        title: "iDEAL",
        description: "Secure payment with iDEAL"
      },
      paypal: {
        title: "PayPal",
        description: "Secure payment with PayPal",
      },
      manual: {
        title: "Test payment",
        description: "Test payment using medusa-payment-manual",
      }
    },
    paymentStripe: {
      cardNumber: "Card number",
      expirationDate: "Expiration date",
    },
    paymentTest: {
      attention: "Attention",
      forTestingPurposesOnly: "For testing purposes only.",
    },
    shipping: {
      anErrorAddingShipping: "An error occurred while adding shipping. Please try again.",
      enterYourAddress: "Enter your address to see available delivery options."
    },
    shippingAddress: {
      hi: "Hi",
      wantSavedAdddresses: "do you want to use one of your saved addresses?",
      form: {
        email: "Email",
        emailReq: "Email is required",
        firstName: "First name",
        firstNameReq: "First name is required",
        lastName: "Last name",
        lastNameReq: "Last name is required",
        company: "Company",
        address: "Address",
        addressReq: "Address is required",
        apartments: "Apartments, suite, etc.",
        postalCode: "Postal code",
        postalReq: "Postal code is required",
        city: "City",
        cityReq: "City is required",
        countryReq: "Country is required",
        state: "State / Province",
        phone: "Phone"
      }
    },
    checkoutTemplate: {
      backShoppingCard: "Back to shopping cart",
      back: "Back",
      siteName: "ACME",
    }
  },
  cart: {
    title: "Shopping Bag",
    description: "View your shopping bag",
    emptyCartMessage: {
      bagEmpty: "Your shopping bag is empty",
      youDontHaveAnything: "You don't have anything in your bag. Let's change that, use the link below to start browsing our products.",
      exploreProducts: "Explore products"
    },
    item: {
      remove: "Remove"
    },
    signInPrompt: {
      alreadyHaveAccount: "Already have an account?",
      signInBetterExpirience: "Sign in for a better experience.",
      signIn: "Sign in"
    },
    templates: {
      shoppingBag: "Shopping Bag",
      goToCheckout: "Go to checkout"
    }
  },
  notFound: {
    title: "404",
    description: "Something went wrong",
    body: {
      title: "Page not found",
      message: "The page you tried to access does not exist.",
      button: "Go to frontpage"
    }
  },
  order: {
    confirmed: {
      title: "Order Confirmed",
      description: "You purchase was successful"
    },
    details: {
      title: "Order",
      description: "View your order"
    },
    help: {
      needHelp: "Need help?",
      contact: "Contact",
      returnsExchanges: "Returns & Exchanges"
    },
    items: {
      quantity: "Quantity"
    },
    orderDetails: {
      tankYouOrderSuccessfully: "Thank you, your order was successfully placed",
      item: "item",
      items: "items"
    },
    orderSummary: {
      orderSummary: "Order Summary",
      subtotal: "Subtotal",
      discount: "Discount",
      shipping: "Shipping",
      taxes: "Taxes",
      total: "Total"
    },
    shippingDetails: {
      delivery: "Delivery",
      address: "Address",
      deliveryMethod: "Delivery method"
    },
  },
  collections: {
    collection: "collection"
  },
  account: {
    addresses: {
      title: "Addresses",
      description: "View your addresses"
    },
    index: {
      title: "Account",
      description: "Overview of your account activity."
    },
    login: {
      title: "Sign in",
      description: "Sign in to your account."
    },
    orders: {
      title: "Orders",
      description: "Overview of your previous orders."
    },
    profile: {
      title: "Profile",
      description: "View and edit your profile."
    },
    info: {
      cancel: "Cancel",
      edit: "Edit",
      errorOccurred: "An error occurred, please try again",
      updateSuccessfully: "updated successfully",
      saveChanges: "Save changes"
    },
    nav: {
      account: "Account",
      overview: "Overview",
      profile: "Profile",
      addresses: "Addresses",
      orders: "Orders",
      logOut: "Log out"
    },
    addressCard: {
      addAddress: {
        addError: "Failed to add address, please try again.",
        newAddress: "New address",
        addAddress: "Add address",
      },
      editAddress: {
        editError: "Failed to update address, please try again.",
        edit: "Edit",
        remove: "Remove",
        editAddress: "Edit address",
      },
      form: {
        firstName: "First name",
        firstNameReq: "First name is required",
        lastName: "Last name",
        lastNameReq: "Last name is required",
        company: "Company",
        address: "Address",
        addressReq: "Address is required",
        apartment: "Apartment, suite, etc.",
        postalCode: "Postal code",
        postalCodeReq: "Postal code is required",
        city: "City",
        cityReq: "City is required",
        province: "Province / State",
        phone: "Phone",
      },
      cancel: "Cancel",
      save: "Save"
    },
    edit: "Edit",
    login: {
      invalidEmailOrPassword: "Invalid email or password",
      welcomeBack: "Welcome back",
      signInExperience: "Sign in to access an enhanced shopping experience.",
      form: {
        email: "Email",
        emailReq: "Email is required",
        password: "Password",
        passwordReq: "Password is required"
      },
      enter: "Enter",
      authError: "These credentials do not match our records",
      notMember: "Not a member?",
      joinUs: "Join us"
    },
    loginDetails: {
      email: "Email",
      password: "Password",
      editEmail: {
        mustNewEmail: "You must enter a new email.",
        unableUpdateEmail: "Unable to update email, try again later.",
        editYourEmail: "Edit your email",
        form: {
          email: "Email",
          emailReq: "Email is required",
          validMailReq: "Must be a valid email"
        },
        cancel: "Cancel",
        save: "Save"
      },
      editPassword: {
        newDifferentOld: "New password must be different from old password.",
        oldNotMatch: "Old password does not match our records.",
        unableUpdate: "Unable to update password, try again later.",
        editYourPassword: "Edit your password",
        form: {
          oldPassword: "Old password",
          oldPasswordReq: "Old password is required",
          newPassword: "New password",
          newPasswordReq: "New password is required"
        },
        cancel: "Cancel",
        save: "Save"
      }
    },
    orderCard: {
      more: "more",
      seeDetails: "See details"
    },
    orderOverview: {
      nothingSeeHere: "Nothing to see here",
      anyOrdersYet: "You don't have any orders yet, let us change that",
      continueShopping: "Continue shopping"
    },
    overview: {
      hello: "Hello",
      profile: "Profile",
      addresses: "Addresses",
      orders: "Orders",
      signedInAs: "Signed in as:",
      completed: "Completed",
      saved: "Saved",
      recentOrders: "Recent orders",
      datePlaced: "Date placed",
      orderNumber: "Order number",
      totalAmount: "Total amount",
      goToOrder: "Go to order",
      noRecentOrders: "No recent orders"
    },
    profileBillingAddress: {
      noBillingAddress: "No billing address",
      billingAddress: "Billing address",
      form: {
        firstName: "First name",
        lastName: "Last name",
        company: "Company",
        address: "Address",
        apartment: "Apartment, suite, etc.",
        postalCode: "Postal code",
        city: "City",
        province: "Province"
      }
    },
    profileEmail: {
      emailAlreadyUse: "Email already in use",
      email: "Email",
    },
    profileName: {
      name: "Name",
      firstName: "First name",
      lastName: "Last name"
    },
    profilePassword: {
      oldPasswordIncorrect: "Old password is incorrect",
      passwordsNotMatch: "Passwords do not match",
      form: {
        password: "Password",
        passwordSecurityReasons: "The password is not shown for security reasons",
        oldPassword: "Old password",
        newPassword: "New password",
        confirmPassword: "Confirm password"
      }
    },
    profilePhone: {
      form: {
        phone: "Phone",
      }
    },
    register: {
      errorTryAgain: "An error occured. Please try again.",
      becomeMember: "Become a Member",
      createYourMemberProfile: "Create your Member profile, and get access to an enhanced shopping experience.",
      form: {
        firstName: "First name",
        firstNameReq: "First name is required",
        lastName: "Last name",
        lastNameReq: "Last name is required",
        email: "Email",
        emailReq: "Email is required",
        phone: "Phone",
        password: "Password",
        passwordReq: "Password is required",
      },
      theseCredentialsNotMatch: "These credentials do not match our records",
      accountCreateAgree: "By creating an account, you agree",
      privacyPolicy: "Privacy Policy",
      and: "and",
      termsOfUse: "Terms of Use",
      join: "Join",
      alreadyMember: "Already a member?",
      signIn: "Sign in"
    },
    accountLayout: {
      gotQuestions: "Got questions?",
      youFrequentlyAsked: "You can find frequently asked questions and answers on our customer service page.",
      customerService: "Customer Service"
    },
    addressesTemplate: {
      shippingAddress: "Shipping Addresses",
      viewUpdateShippingAddresses: "View and update your shipping addresses, you can add as many as you like. Saving your addresses will make them available during checkout."
    },
    orderDetailsTemplate: {
      loading: "Loading..."
    },
    ordersTemplate: {
      orders: "Orders",
      viewYourOrdersSatatus: "View your previous orders and their status. You can also create returns or exchanges for your orders if needed."
    },
    profileTemplate: {
      profile: "Profile",
      viewUpdateProfileInfo: "View and update your profile information, including your name, email, and phone number. You can also update your billing address, or change your password."
    }
  },
  common: {
    cartTotals: {
      subtotal: "Subtotal",
      discount: "Discount",
      giftCard: "Gift card",
      shipping: "Shipping",
      taxes: "Taxes",
      total: "Total"
    },
    hamburger: {
      openMainMenu: "Open main menu"
    },
    head: {
      titleDescription: "ACME"
    },
    lineItemPrice: {
      original: "Original",
    }
  },
  home: {
    featuredProducts: {
      latestProducts: "Latest products",
      ourNewestStyles: "Our newest styles are here to help you look your best.",
      exploreProducts: "Explore products",
    },
    hero: {
      summerStylesFinally: "Summer styles are finally here",
      thisYearSummerCollection: "his year, our new summer collection will shelter you from the harsh elements of a world that doesn&apos;t care if you live or die.",
      exploreProducts: "Explore products",
      photoAlt: "Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
    }
  },
  layout: {
    cartDropDown: {
      myBag: "My Bag",
      shoppingBag: "Shopping Bag",
      quantity: "Quantity",
      remove: "Remove",
      subtotal: "Subtotal",
      inclTaxes: "incl. taxes",
      goToBag: "Go to bag",
      yourShoppingBagEmpty: "Your shopping bag is empty.",
      goToAllProducts: "Go to all products page",
      exploreProducts: "Explore products",
    },
    countrySelect: {
      shippingTo: "Shipping to"
    },
    dropDownMenu: {
      store: "Store",
      collections: "Collections",
    },
    footerCTA: {
      shopLatestStyles: "Shop the latest styles",
      exploreProducts: "Explore products"
    },
    footerNav: {
      siteName: "Acme",
      collections: "Collections",
      projectName: "Medusa",
      documentation: "Documentation",
      sourceCode: "Source code",
      copyright: "Copyright 2022 ACME"
    },
    nav: {
      siteName: "Acme",
      account: "Account"
    }
  },
  mobileMenu: {
    countryMenu: {
      shippingTo: "Shipping To"
    },
    mainMenu: {
      siteName: "Acme",
      searchProducts: "Search products",
      goToStore: "Go to Store",
      store: "Store",
      goTo: "Go to",
      collection: "collection",
      account: "Account",
      goToSignPage: "Go to sign in page",
      signIn: "Sign in",
      signedInAs: "Signed in as",
      goToAccountPage: "Go to account page",
      delivery: "Delivery",
      selectShippingCountry: "Click to select shipping country",
      shippingTo: "Shipping to",
    },
    searchMenu: {
      cancel: "Cancel",
    }
  },
  products: {
    imageGallary: {
      goToImage: "Go to image",
      thumbnail: "Thumbnail",
      productImage: "Product image"
    },
    mobileActions: {
      selectOptions: "Select Options",
      outOfStock: "Out of stock",
      addToCart: "Add to cart",
    },
    optionSelect: {
      select: "Select"
    },
    productActions: {
      original: "Original",
      outOfStock: "Out of stock",
      addToCart: "Add to cart"
    },
    productTabs: {
      productInformation: "Product Information",
      shippingReturns: "Shipping & Returns",
      material: "Material",
      countryOfOrigin: "Country of origin",
      type: "Type",
      weight: "Weight",
      dimensions: "Dimensions",
      lengthAbbreviation: "L",
      widthAbbreviation: "W",
      heightAbbreviation: "H",
      tags: "Tags",
      fastDelivery: "Fast delivery",
      yourPackage: "Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.",
      simpleExchanges: "Simple exchanges",
      isTheFitQuiteRight: "Is the fit not quite right? No worries - we'll exchange your product for a new one.",
      easyReturns: "Easy returns",
      justReturnYourProduct: "Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free.",
    },
    relatedProducts: {
      relatedProducts: "Related products",
      youMightProducts: "You might also want to check out these products.",
      loadMore: "Load more",
    },
    thumbnail: {
      thumbnail: "Thumbnail"
    }
  },
  search: {
    searchBoxWrapper: {
      searchProducts: "Search products..."
    }
  },
  store: {
    refinementList: {
      collections: "Collections"
    }
  }
};