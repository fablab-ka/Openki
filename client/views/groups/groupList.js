Template.groupList.helpers({
	name: function() {
		if (!this) return;
		var groupId = ''+this; // it's not a string?! LOL I DUNNO
		Template.instance().subscribe('group', groupId);
		var group = Groups.findOne(groupId);
		console.log(group)
		return group && group.short;
	}
});