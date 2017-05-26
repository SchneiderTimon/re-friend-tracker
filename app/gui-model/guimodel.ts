export class GuiModel {

    private _guiModel = {
       "application": {
                "title": "Timon's Friend Tracker",
                "formList": [
                    {
                        "id": "FriendForm",
                        "title": "Friend",
                        "formFieldList": [
                            {
                                "id": "familyName",
                                "type": "text",
                                "name": "FamilyName",
                                "width": 1,
                                "required": true
                            },
                            {
                                "id": "firstName",
                                "type": "text",
                                "name": "FirstName",
                                "width": 1,
                                "required": true
                            },
							{
                                "id": "nickname",
                                "type": "text",
                                "name": "Nickname",
                                "width": 1,
                                "required": true
                            },
                            {
                                "id": "location",
                                "type": "autocomplete",
                                "name": "Location",
                                "data": ["Winterthur", "Zürich"],
                                "form": "GroupForm",
                                "width": 2
                            },
                            {
                                "id": "evtBirth",
                                "type": "date",
                                "name": "Birthday",
                                "width": 2
                            },
                            {
                                "id": "comment",
                                "type": "text",
                                "name": "Comments",
                                "width": 2,
                                "height": 4,
                                "maxLength": 5000,
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            },
							{ 
								"id": "group", 
								"type": "autocomplete", 
								"name": "Group", 
								"data": [ "Study", "Family", "School" ], 
								"form": "GroupForm", "width": 2 
							},
                        ]
                    },
					{
                        "id": "ActivityForm",
                        "title": "Activity",
                        "formFieldList": [
                            {
                                "id": "activityName",
                                "type": "text",
                                "name": "Activity",
                                "width": 4,
                                "required": true
                            },
                            {
                                "id": "date",
                                "type": "date",
                                "name": "Date",
                                "width": 2,
                            },
                            {
                                "id": "location",
                                "type": "autocomplete",
                                "name": "Location",
                                "data": ["Winterthur", "Zürich"],
                                "form": "LocationForm",
                                "width": 2
                            },
                           
                            {
                                "id": "comment",
                                "type": "text",
                                "name": "Comments",
                                "width": 2,
                                "height": 4,
                                "maxLength": 5000,
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            },
							
                        ]
                    },
                    {
                        "id": "LocationForm",
                        "title": "Location",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "LocationName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
					{ 
						"id": "GroupForm", 
						"title": "Group", 
						"formFieldList": [ 
							{ 
								"id": "name", 
								"type": "text", 
								"name": "GroupName", 
								"width": 2, "required": true 
							}, 
							{ 
								"type": "deleteButton", 
								"name": "Delete" 
							}, 
							{ 
								"type": "cancelButton", 
								"name": "Cancel" 
							}, 
							{ 
								"type": "okButton", "name": "Ok" 
							} 
						] 
					},
                ],
                "pageList": [
                    {
                        "id": "mainmenu",
                        "name": "MainMenu",
                        "elementList": [
                            {
                                "type": "button",
                                "name": "Friends",
                                "icon": "fa-user",
                                "color": "blue",
                                "page": "friendspage",
                            },
                            {
                                "type": "button",
                                "name": "Location",
                                "icon": "fa-cubes",
                                "color": "yellow",
                                "page": "locationspage",
                            },
							{
                                "type": "button",
                                "name": "Groups",
                                "icon": "fa-weixin",
                                "color": "wisteria",
                                "page": "groupspage",
                            },
							
                        ]
                    },
                    {
                        "id": "friendspage",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewFriend",
                                "icon": "fa-user",
                                "color": "green",
                                "form": {
                                    "form": "FriendForm"
                                }
                            },
                            {
                                "type": "list",
                                "icon": "fa-user",
                                "color": "blue",
                                "search": true,
                                "data": [{ name: "Anton Amacker" }, { name: "Britta Beavers" }],
                                "page": "activitypage",
                            },
                        ]
                    },
					{ 
						"id": "activitypage", 
						"elementList": [ 
						{ 
							"type": "backbutton", 
						}, 
						{ 
							"type": "button", 
							"name": "EditFriend", 
							"icon": "fa-user", 
							"color": "green", 
							"form": { 
								"form": "FriendForm" 
							} 
						},
						{ 
							"type": "newButton", 
							"name": "AddActivity", 
							"icon": "fa-calendar", 
							"color": "green", 
							"form": { 
								"form": "ActivityForm" 
							} 
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "carrot",
							"search": true,
							"data": [ { name: "Movie Ted2" }, { name: "Eating Pizza" }, { name: "Skidiving"} ],
							"form": {
							"form": "ActivityForm"
							}
						},
						] 
					},
					{ 
						"id": "groupspage", 
						"elementList": [ 
						{ 
							"type": "backbutton", 
						}, 
						{ 
							"type": "newButton", 
							"name": "NewGroup", 
							"icon": "fa-weixin", 
							"color": "green", 
							"form": { 
								"form": "GroupForm" 
							} 
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
							"form": {
							"form": "GroupForm"
							}
						},
						] 
					},
                    {
                        "id": "locationspage",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewLocation",
                                "icon": "fa-home",
                                "color": "green",
                                "form": {
                                    "form": "LocationForm"
                                }
                            },
                            {
                                "type": "list",
                                "icon": "fa-home",
                                "color": "blue",
                                "search": true,
                                "data": [{ name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal" }, { name: "Zürich" }],
                                "form": {
                                    "form": "LocationForm"
                                }
                            },
                        ]
                    }
                ]
            }
        };


    get guiModel() {
        return this._guiModel;
    }
}