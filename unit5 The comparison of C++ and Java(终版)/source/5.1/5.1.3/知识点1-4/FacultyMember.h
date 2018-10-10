/*
 * FacultyMember.h
 *
 *  Created on: 2013-10-25
 *      Author: Administrator
 */

#ifndef FACULTYMEMBER_H_
#define FACULTYMEMBER_H_
#include <string>
using namespace std;

class FacultyMember {

private:
	string identification;
	string name;
	string contactTelephone;

public:
	FacultyMember(string& initialId, string& initialName,string& initialTele );
	FacultyMember();
	string getIdentification();
	string getName();
	string getContactTelephone();
	string toString();
	bool operator==(FacultyMember &facuty);
	~FacultyMember(){}
};













#endif /* FACULTYMEMBER_H_ */
